const messageListEl = document.querySelector('.js-messages-wrapper');

const onCloseBtnElClick = event => {
  const { target } = event;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const message = target.closest('.js-message');

  message.remove();
};

messageListEl.addEventListener('click', onCloseBtnElClick);
