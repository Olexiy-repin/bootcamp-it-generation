// https://openweathermap.org/current
import { fetchCurrentWeather } from './weather-api.js';
import createWeatherCard from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${new String(date.getHours()).padStart(2, 0)}:${new String(date.getMinutes()).padStart(
    2,
    0
  )}`;
};

const onWeatherFormSubmit = event => {
  event.preventDefault();

  const weatherQuery = event.currentTarget.elements.user_country.value;

  fetchCurrentWeather(weatherQuery)
    .then(data => {
      console.log(data);

      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Такого міста не знайдено');

        weatherWrapperEl.innerHTML = '';
      }
    })
    .finally(() => {
      event.target.reset();
    });
};

weatherFormEl.addEventListener('submit', onWeatherFormSubmit);
