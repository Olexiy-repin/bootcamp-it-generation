const modalOpenBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const modalCloseBtnEl = document.querySelector('.js-modal-close');

const onModalOpenBtnElClick = () => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onEscKeyDown);
  backdropEl.addEventListener('click', onBackdropElClick);
};

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onEscKeyDown);
  backdropEl.removeEventListener('click', onBackdropElClick);
};

const onEscKeyDown = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onBackdropElClick = event => {
  const { target, currentTarget } = event;

  if (target === currentTarget) {
    closeModal();
  }
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnElClick);
modalCloseBtnEl.addEventListener('click', closeModal);
