// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const targetElement = document.querySelector('.js-target-element');

const unsplashApi = new UnsplashApi();

const observer = new IntersectionObserver(
  async (entries, observer) => {
    if (entries[0].isIntersecting) {
      unsplashApi.page += 1;

      try {
        const response = await unsplashApi.fetchPhotos();
        const { data } = response;

        galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

        if (data.total_pages === unsplashApi.page) {
          observer.unobserve(targetElement);
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  {
    root: null,
    rootMargin: '0px 0px 500px 0px',
    threshold: 1,
  }
);

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

    observer.observe(targetElement);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
