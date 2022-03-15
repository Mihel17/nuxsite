const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const svgo = require("gulp-svgo");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const cheerio = require("gulp-cheerio");
const del = require("del");
const fileinclude = require('gulp-file-include');
const sync = require("browser-sync").create();
const uncss = require('gulp-uncss');


const PATH_TO_DIST = '/OpenServer/domains/nuxsite'


// Styles

const styles = () => {
  return gulp.src("src/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(gulp.dest(`${PATH_TO_DIST}/css`))
    .pipe(sync.stream());
}

exports.styles = styles;

// HTML

const html = () => {
  return gulp.src("src/*.php")
    .pipe(fileinclude())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(rename({
      extname: ".php"
    }))
    .pipe(gulp.dest("dist"))
    .pipe(gulp.dest(PATH_TO_DIST));
}

// WebP

const webpOptimized = () => {
  return gulp.src("src/img/**/*.{jpg,png}")
    .pipe(webp({
      quality: 90,
      method: 6,
      sns: 0
    }))
    .pipe(gulp.dest("dist/img"))
    .pipe(gulp.dest(`${PATH_TO_DIST}/img`));
}

const createWebp = () => {
  return gulp.src("src/img/**/*.{jpg,png}")
    .pipe(webp({
      quality: 100,
      method: 0,
      sns: 0
    }))
    .pipe(gulp.dest("dist/img"))
    .pipe(gulp.dest(`${PATH_TO_DIST}/img`));
}

exports.webpOptimized = webpOptimized;
exports.createWebp = createWebp;

// Sprite

const spriteMin = () => {
  return gulp.src("src/assets/img/**/*.svg")
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(cheerio({
      run: ($) => {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(rename({
      basename: 'sprite',
      suffix: ".min",
      extname: ".svg"
    }))
    .pipe(gulp.dest("dist/img/svg"))
    .pipe(gulp.dest(`${PATH_TO_DIST}/img/svg`));
}
exports.spriteMin = spriteMin;


// Copy
const copy = (done) => {
  gulp.src([
    "src/assets/fonts/*.{woff2,woff}",
    "src/assets/favicon/**/*",
    "src/assets/img/icons/*.svg",
    "src/layout/**/*.php",
    // "src/assets/leafleat/**/*",
    // "src/assets/img/promo.webp"
  ], {
    base: "src"
  })
    .pipe(gulp.dest("dist"))
    .pipe(gulp.dest(PATH_TO_DIST))
  done();
}
exports.copy = copy;

// const copyStyle = (done) => {
//   gulp.src([
//     "src/assets/css/*.css",

//   ])
//     .pipe(gulp.dest("dist/css"))
//   done();
// }
// exports.copy = copyStyle;


// Clean

const clean = () => {
  return del("dist");
  // return del(PATH_TO_DIST);
};
exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "dist"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;

// Reload

const reload = (done) => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("src/*.scss", gulp.series(styles));
  gulp.watch("src/assets/sass/**/*.scss", gulp.series(styles));
  gulp.watch("src/*.js", gulp.series(webpackRun, reload));
  gulp.watch("src/assets/js/**/*.js", gulp.series(webpackRun, reload));
  gulp.watch("src/**/*.html", gulp.series(html, reload));
}


// Webpack
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const webpackRun = (done) => {
  gulp.src('./src/script.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulp.dest(`${PATH_TO_DIST}/js`));
  done();
}


// Build

const build = gulp.series(
  clean,
  copy,
  // copyStyle,
  gulp.parallel(
    styles,
    html,
    spriteMin,
    // sprite,
    webpOptimized
  ),
  webpackRun,
);

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  copy,
  // copyStyle,
  gulp.parallel(
    styles,
    html,
    spriteMin,
    // sprite,
    // svg,
    createWebp
  ),
  webpackRun,
  gulp.series(
    server,
    watcher
  ));
