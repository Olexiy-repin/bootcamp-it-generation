const logFunction = function (userObj) {
  const { firstName, lastName, age, gender, userEmail, userPhoneNumber } = userObj;

  console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};

// logFunction('Amelia', 'Burgess', 30, 'female', 'apjez@eh.aq', '(096) 35-21-476');
logFunction({
  firstName: 'Amelia',
  lastName: 'Burgess',
  userEmail: 'apjez@eh.aq',
  gender: 'female',
  age: 30,
  userPhoneNumber: '(096) 35-21-476',
});
