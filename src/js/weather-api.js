'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '95632b02f9162f375a368971925f5209';

export const fetchCurrentWeather = weatherQuery => {
  const searchParams = new URLSearchParams({
    q: weatherQuery,
    lang: 'ua',
    units: 'metric',
    appid: API_KEY,
  });

  return fetch(`${BASE_URL}/weather?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
