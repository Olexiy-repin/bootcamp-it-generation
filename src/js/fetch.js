fetch('https://jsonplaceholder.typicode.com/todsos/')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    if (err.message === '404') {
      alert('По вашему запиту нічого не знайдено!');
    }
  });
