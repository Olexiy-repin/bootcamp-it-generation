// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashApi();

const onSearchFormSubmit = event => {
  event.preventDefault();

  unsplashApi.page = 1;
  unsplashApi.searchQuery = event.target.elements.user_search_query.value;

  unsplashApi
    .fetchPhotos()
    .then(data => {
      if (data.total_pages === 0) {
        return;
      }

      if (data.total_pages === 1) {
        galleryEl.innerHTML = createGalleryCards(data.results);
        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.results);

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnClick = event => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotos()
    .then(data => {
      galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

      if (data.total_pages === unsplashApi.page) {
        loadMoreBtnEl.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
