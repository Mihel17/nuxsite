const sectionServices = document.querySelector('#section-servises');
const sectionServicesTitle = document.querySelector('.main-title');
const sectionContainer = sectionServices.querySelector('.section__container');
const sectionHeader = sectionContainer.querySelector('.section-header');
const sectionHeaderBtns = sectionContainer.querySelectorAll('.section-header__btn');
const sectionImgs = sectionContainer.querySelectorAll('.section-header__category-img');
const sectionTitle = sectionContainer.querySelector('.services__category-title');
const sectionDescriptions = sectionContainer.querySelectorAll('.services__category-description');


const servicesCssBox = document.createElement('style');
servicesCssBox.innerHTML = `
.section-header--animation {
  max-height: calc(${sectionTitle.offsetHeight}px + 1em + 2em);
}
.section-header__btn--animation {
  gap: 0;
  padding: 0.5em 1em;
  border-radius: 20px;
}
.section-header__hide--animation {
  max-height: 1px !important;
  overflow: hidden !important;
  pointer-events: none !important;
  opacity: 0;
}
.services__category-title {
  font-size: 14px !important;
}
`

const showScroll = () => {
  if (sectionServices.scrollTop > 75) {
    sectionServices.appendChild(servicesCssBox)
    for (const item of sectionHeaderBtns) {
      item.classList.add('section-header__btn--animation')
    }
    sectionHeader.classList.add('section-header--animation')
    for (const item of sectionImgs) {
      item.classList.add('section-header__hide--animation')
    }
    for (const item of sectionDescriptions) {
      item.classList.add('section-header__hide--animation')
    }
  } else if (sectionServices.scrollTop < 75) {
    servicesCssBox.remove();
    for (const item of sectionHeaderBtns) {
      item.classList.remove('section-header__btn--animation')
    }
    sectionHeader.classList.remove('section-header--animation')
    for (const item of sectionImgs) {
      item.classList.remove('section-header__hide--animation')
    }
    for (const item of sectionDescriptions) {
      item.classList.remove('section-header__hide--animation')
    }
  }
}
sectionServices.addEventListener('scroll', showScroll)


