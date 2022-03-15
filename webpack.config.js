const path = require('path')
const chalk = require('chalk');

// start message
console.log(chalk.bgWhite.black(' ☘️.  START ☘️ ', ' '));

module.exports = {
  mode: 'production',
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  entry: {
    script: ['@babel/polyfill', './script.js'],
    // catalog: ['./js/catalog.js'],
    // form: ['./js/form.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    publicPath: '/',
    filename: '[name].js',
    // chunkFilename: '[name].js',
    clean: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'core')
    }
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  devtool: 'source-map',
}


