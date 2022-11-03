/*
 * Події елементів форм. focus, blur, change, input, submit
 */
const inputEl = document.querySelector('.js-username-input');
const usernameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

const onInputElFocus = event => {
  event.target.style.outline = '2px solid teal';
};

const onInputElBlur = event => {
  event.target.style.outline = 'none';
};

const onInputElInput = event => {
  console.dir(event.target.value);

  if (event.target.value === '') {
    usernameOutputEl.textContent = 'користувач';

    return;
  }

  usernameOutputEl.textContent = event.target.value;
};

const onCheckboxElChange = event => {
  if (event.target.checked && inputEl.value !== '') {
    submitBtnEl.disabled = false;

    return;
  }

  submitBtnEl.disabled = true;
};

const onContactFormElSubmit = event => {
  event.preventDefault();

  console.log('Hello');

  event.target.reset();
};

inputEl.addEventListener('focus', onInputElFocus);
inputEl.addEventListener('blur', onInputElBlur);
inputEl.addEventListener('input', onInputElInput);
checkboxEl.addEventListener('change', onCheckboxElChange);
contactFormEl.addEventListener('submit', onContactFormElSubmit);

// const textEl = document.querySelector('.js-text');

// console.log(textEl.textContent);
// console.log(textEl.innerText);
