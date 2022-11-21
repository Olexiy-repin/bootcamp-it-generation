/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUser = (userId, userInfo) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

updateUser(13, { email: 'tugibi@wontouh.cx', username: 'FloraLarson' })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
