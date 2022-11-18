'use strict';

export class JsonPlaceholderApi {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() {
    this.page = 1;
  }

  fetchPosts(page) {
    return fetch(`${this.#BASE_URL}/posts?_page=${this.page}&_limit=10`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
