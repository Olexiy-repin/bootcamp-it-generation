const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.elementColor = color;
  });
};

paintElements();

const onPalletElClick = event => {
  const { target } = event;

  if (target.nodeName !== 'LI') {
    return;
  }

  const color = target.dataset.elementColor;
  const outputEl = target.querySelector('.js-pallet__item-color');

  outputEl.textContent = color;
};

palletEl.addEventListener('click', onPalletElClick);
