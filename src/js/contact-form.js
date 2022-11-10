import localstorageApi from './localstorage';

const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const fillContactFormElements = () => {
  const userDataFromLS = localstorageApi.load('userData');

  for (const prop in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(prop)) {
      console.log(prop);

      contactFormEl.elements[prop].value = userDataFromLS[prop];
    }
  }
};

fillContactFormElements();

const onContactFormElChange = event => {
  const name = event.target.name;
  const value = event.target.value;

  userData[name] = value;

  localstorageApi.save('userData', userData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localstorageApi.remove('userData');
};

contactFormEl.addEventListener('change', onContactFormElChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);

// const user = {
//   firstName: 'Carolyn',
//   lastName: 'Griffin',
//   age: 50,
//   email: 'piggaz@gazmiz.za',
// };

// localStorage.setItem('userData', JSON.stringify(user));
// localStorage.setItem(
//   'users',
//   JSON.stringify([{ firstName: 'Oleksii' }, { firstName: 'Oleksii' }, { firstName: 'Oleksii' }])
// );

// console.log(window.localStorage);

// console.log(JSON.parse(localStorage.getItem('userData')));

// localStorage.removeItem('userData');

// localStorage.clear();
