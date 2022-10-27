/*
 * Наслідування з extends та super
 */
class Developer {
  #login;
  #email;

  constructor({ countOfProjects, firstName, lastName, age, login, email }) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    this.countOfProjects = countOfProjects;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${User.trimStr(this.firstName)} ${User.trimStr(this.lastName)}`;
  }

  doDeveloperWork() {
    console.log(`Роблю якусь роботу`);
  }

  static trimStr(str) {
    return str.trim();
  }
}

class Manager {
  #login;
  #email;

  constructor({ managerProp, firstName, lastName, age, login, email }) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    this.managerProp = managerProp;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${User.trimStr(this.firstName)} ${User.trimStr(this.lastName)}`;
  }

  doManagerWork() {
    console.log(`Роблю якусь роботу`);
  }

  static trimStr(str) {
    return str.trim();
  }
}

const user = new Developer({
  countOfProjects: 10,
  firstName: 'Nicholas',
  lastName: 'West',
  age: 30,
  login: 'vcvd',
  email: 'iseegi@sak.sx',
});

console.log(user);

const someManager = new Manager({
  managerProp: 343,
  firstName: 'Caleb',
  lastName: 'Murray',
  age: 20,
  login: 'bgff',
  email: 'uwigicnaf@ra.be',
});

console.log(someManager);
