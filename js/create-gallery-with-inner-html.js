const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

// const titleEl = document.querySelector('.js-title');
// titleEl.textContent = '<span class="some-class">Main</span> title';

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

// const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
// const makeGalleryCard = ({ width, height, url, alt } = {}) => {
//   return `
//     <li class="gallery-item">
//       <a href="#">
//         <img src="${url}" alt="${alt}" width="${width}" height="${height}">
//       </a>
//     </li>
//   `;
// };

// через map
// Створення масиву рядків із елементами
// const galleryItemsEl = pictures.map((el, idx, arr) => {
//   return makeGalleryCard(el);
// });

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryItemsEl.join('');
// galleryListEl.insertAdjacentHTML('beforeend', galleryItemsEl.join());

// через reduce
// Створення суцільного рядка із елементів
// const galleryItemsEl = pictures.reduce((acc, el, idx, arr) => {
//   return acc + makeGalleryCard(el);
// }, '');

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryItemsEl;
// galleryListEl.insertAdjacentHTML('beforeend', galleryItemsEl);
