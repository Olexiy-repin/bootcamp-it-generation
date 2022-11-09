const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const user = {
  firstName: 'Carolyn',
  lastName: 'Griffin',
  age: 50,
  email: 'piggaz@gazmiz.za',
};

localStorage.setItem('userData', JSON.stringify(user));

console.log(localStorage);
