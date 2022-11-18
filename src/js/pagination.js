// https://jsonplaceholder.typicode.com/
import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostsCards from '../templates/posts.hbs';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

jsonPlaceholderApi
  .fetchPosts()
  .then(data => {
    postsListEl.innerHTML = createPostsCards(data);
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      postsListEl.insertAdjacentHTML('beforeend', createPostsCards(data));

      if (jsonPlaceholderApi.page === 10) {
        loadMoreBtnEl.style.display = 'none';
        return;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
