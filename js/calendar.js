const calendarBodyEl = document.querySelector('.js-calendar-tbody');
let prevTdEl = null;

const onCalendarElClick = event => {
  const { target } = event;

  // Якщо комірка порожня або це не <td>, то нічого робити не треба.
  if (target.textContent === '' || target.nodeName !== 'TD') {
    return;
  }

  // Перевірка на перший клік
  if (prevTdEl === null) {
    target.classList.add('active');
    prevTdEl = target;

    return;
  }

  if (prevTdEl === target) {
    target.classList.toggle('active');

    return;
  }

  prevTdEl.classList.remove('active');
  target.classList.add('active');
  prevTdEl = target;
};

calendarBodyEl.addEventListener('click', onCalendarElClick);
