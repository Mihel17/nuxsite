const modalButtons = document.querySelectorAll('#modalButton');
const page = document.querySelector('.page__body');
const modal = document.querySelector('#staticBackdrop');
const closeModal = modal.querySelector('.btn-close');

// let oncloseModalClick = 0;

const onModalButtonClick = () => {
  page.classList.add('off-scroll')
  // closeModal.addEventListener('click', oncloseModalClick, { once: true })
}
for (const item of modalButtons) {
  // item.addEventListener('click', onModalButtonClick, { once: true })
  item.addEventListener('click', onModalButtonClick)
}

const oncloseModalClick = () => {
  page.classList.remove('off-scroll')
  // for (const item of modalButtons) {
  //   item.addEventListener('click', onModalButtonClick, { once: true })
  // }
}
// closeModal.addEventListener('click', oncloseModalClick, { once: true })
closeModal.addEventListener('click', oncloseModalClick)

