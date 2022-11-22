// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashApi();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  unsplashApi.page = 1;
  unsplashApi.searchQuery = event.target.elements.user_search_query.value;

  try {
    const response = await unsplashApi.fetchPhotos();
    const { data } = response;

    if (data.total_pages === 0) {
      return;
    }

    if (data.total_pages === 1) {
      galleryEl.innerHTML = createGalleryCards(data.results);
      return;
    }

    galleryEl.innerHTML = createGalleryCards(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }

  // unsplashApi
  //   .fetchPhotos()
  //   .then(response => {
  //     const { data } = response;

  //     if (data.total_pages === 0) {
  //       return;
  //     }

  //     if (data.total_pages === 1) {
  //       galleryEl.innerHTML = createGalleryCards(data.results);
  //       return;
  //     }

  //     galleryEl.innerHTML = createGalleryCards(data.results);
  //     loadMoreBtnEl.classList.remove('is-hidden');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

const onLoadMoreBtnClick = async event => {
  unsplashApi.page += 1;

  try {
    const response = await unsplashApi.fetchPhotos();
    const { data } = response;

    galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

    if (data.total_pages === unsplashApi.page) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }

  // unsplashApi
  //   .fetchPhotos()
  //   .then(response => {
  //     const { data } = response;

  //     galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

  //     if (data.total_pages === unsplashApi.page) {
  //       loadMoreBtnEl.classList.add('is-hidden');
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
