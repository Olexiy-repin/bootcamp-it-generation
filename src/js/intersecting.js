const sectionsEl = document.querySelectorAll('.section');
const targetSecEl = document.querySelector('.js-target-section');

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

sectionsEl.forEach(el => {
  el.style.backgroundColor = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

const options = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    console.log('Hello');
  }
};

const sectionObserver = new IntersectionObserver(callback, options);

sectionObserver.observe(targetSecEl);
