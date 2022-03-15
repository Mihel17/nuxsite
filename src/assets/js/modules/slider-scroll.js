// const pageNavigation = document.querySelector('.navbar-nav');
// const mainPage = document.querySelector('.main-content');
// const mainPageChildren = mainPage.children;

// const openChosenSection = (evt) => {
//   const classActiveSection = evt.target.dataset.class;
//   console.log(classActiveSection)
// }
// pageNavigation.addEventListener('click', openChosenSection)
// console.log(mainPageChildren)


// const pageSection = mainPage.querySelector('section');
// const pageSectionWidth = pageSection.offsetWidth;
// let scrollPosition = mainPage.scrollLeft;

// function getBodyScrollLeft() {
//   if (mainPage.scrollLeft < pageSectionWidth) {
//     mainPage.scrollLeft = 0;
//   } else if (mainPage.scrollLeft > pageSectionWidth && mainPage.scrollLeft < pageSectionWidth * 2) {
//     mainPage.scrollLeft = scrollPosition + pageSectionWidth;
//     scrollPosition = mainPage.scrollLeft;
//   } else if (mainPage.scrollLeft > pageSectionWidth * 2 && mainPage.scrollLeft < pageSectionWidth * 3) {
//     mainPage.scrollLeft = scrollPosition + pageSectionWidth;
//     scrollPosition = mainPage.scrollLeft;
//   } else if (mainPage.scrollLeft > pageSectionWidth * 3 && mainPage.scrollLeft < pageSectionWidth * 4) {
//     mainPage.scrollLeft = scrollPosition + pageSectionWidth;
//     scrollPosition = mainPage.scrollLeft;
//   }
//   else if (mainPage.scrollLeft > pageSectionWidth * 4 && mainPage.scrollLeft < pageSectionWidth * 5) {
//     mainPage.scrollLeft = scrollPosition + pageSectionWidth;
//     scrollPosition = mainPage.scrollLeft;
//   }
//   else if (mainPage.scrollLeft > pageSectionWidth * 5 && mainPage.scrollLeft < pageSectionWidth * 6) {
//     mainPage.scrollLeft = scrollPosition + pageSectionWidth;
//     scrollPosition = mainPage.scrollLeft;
//   }
// }
// mainPage.addEventListener('scroll', getBodyScrollLeft)


// SWIPE----------------
// let x1 = 0;
// let x2 = 0;
// mainPage.addEventListener('touchstart', (event) => {
//   x1 = event.touches[0].clientX;
// }, false);

// mainPage.addEventListener('touchmove', (event) => {
//   x2 = event.touches[0].clientX;
// }, false);

// mainPage.addEventListener('touchend', () => {
//   afterSwipe()
// }, false);

// function afterSwipe() {
//   if (x1 - x2 < 0) {
//     console.log('back')
//   } else {
//     console.log('next')
//   }
// }
