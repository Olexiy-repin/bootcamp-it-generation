/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const textEl = document.querySelector('.js-text');
const divEl = document.querySelector('.js-div');
const sectionEl = document.querySelector('.js-section');

textEl.addEventListener(
  'click',
  event => {
    console.group('p addEventListener');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
    console.groupEnd('p addEventListener');
  },
  {
    // once: true,
    capture: true,
  }
);

textEl.addEventListener('click', event => {
  console.group('p addEventListener');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('p addEventListener');
});

divEl.addEventListener(
  'click',
  event => {
    console.group('div addEventListener');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
    console.groupEnd('div addEventListener');
  },
  {
    // once: true,
    capture: true,
  }
);

divEl.addEventListener('click', event => {
  console.group('div addEventListener');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('div addEventListener');
});

sectionEl.addEventListener(
  'click',
  event => {
    console.group('section addEventListener');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
    console.groupEnd('section addEventListener');
  },
  {
    // once: true,
    capture: true,
  }
);

sectionEl.addEventListener('click', event => {
  console.group('section addEventListener');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('section addEventListener');
});
