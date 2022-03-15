const sectionCases = document.querySelector('#section-cases');

if (window.innerWidth < 1200) {
  const videoCases = sectionCases.querySelectorAll('.cases__wrapper video');
  const scrollTo = () => {
    const centerX = document.documentElement.clientWidth / 2;
    const centerY = document.documentElement.clientHeight / 2;
    const elem = document.elementFromPoint(centerX, centerY);
    // const elemPosition = elem.offsetTop - 10; // CALCULATE PX TO PAGE TOP

    for (const item of videoCases) {
      if (elem === item) {
        // if (!elem === videoCases[0]) {
        //   sectionCases.scrollTop = elemPosition;
        // }
        elem.play();
      } else {
        item.pause();
      }
    }
  }
  sectionCases.addEventListener('scroll', scrollTo)
} else {
  const videoCasesItem = sectionCases.querySelectorAll('.cases__video-item');
  for (const item of videoCasesItem) {
    const videoCases = item.querySelector('.cases__wrapper video');
    const imgCases = item.querySelector('.cases__wrapper img');
    videoCases.setAttribute('controls', '');
    videoCases.setAttribute('poster', `${imgCases.src}`);
  }
}


// const ready = () => {
//   const firstScreen = sectionCases.querySelector('.first-screen');
//   firstScreen.style.maxHeight = 0;
//   firstScreen.style.minHeight = 0;
// }
// window.addEventListener('load', ready);


// const sectionNavBtns = sectionCases.querySelector('.cases__nav-btns');
// const sectionNavBtn1 = sectionNavBtns.querySelector('#cases__nav-btn--1');
// const sectionNavBtn2 = sectionNavBtns.querySelector('#cases__nav-btn--2');
// const casesFilter = () => {
//   if (sectionNavBtn1.checked) {
//     for (const item of videoCases) {
//       if (item.dataset.casescategory === 'cases-beard') {
//         item.classList.add('visually-hidden')
//       } else {
//         item.classList.remove('visually-hidden')
//       }
//     }
//   } else if (sectionNavBtn2.checked) {
//     for (const item of videoCases) {
//       if (item.dataset.casescategory === 'cases-hair') {
//         item.classList.add('visually-hidden')
//       } else {
//         item.classList.remove('visually-hidden')
//       }
//     }
//   }
// }
// sectionNavBtns.addEventListener('change', casesFilter)
