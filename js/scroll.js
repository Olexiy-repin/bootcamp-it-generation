const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach(section => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();

const onWindowScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800 && window.pageYOffset < 1200) {
    const sectionEl = document.querySelector('.js-animated-section');

    sectionEl.classList.add('animated');

    window.removeEventListener('scroll', throttledOnWindowScroll);
  }
};

const throttledOnWindowScroll = _.throttle(onWindowScroll, 300);

window.addEventListener('scroll', throttledOnWindowScroll);
