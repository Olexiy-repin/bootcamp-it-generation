const timer = {
  deadline: new Date(2022, 10, 11),
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      document.querySelector('.js-timer__days').textContent = this.pad(days);
      document.querySelector('.js-timer__hours').textContent = this.pad(hours);
      document.querySelector('.js-timer__minutes').textContent = this.pad(minutes);
      document.querySelector('.js-timer__seconds').textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();

// this.rootSelector.querySelector('.js-timer__days').dataset.title = this.declensionNum(days, [
//   'день',
//   'дні',
//   'днів',
// ]);
// this.rootSelector.querySelector('.js-timer__hours').dataset.title = this.declensionNum(
//   hours,
//   ['година', 'години', 'годин']
// );
// this.rootSelector.querySelector('.js-timer__minutes').dataset.title = this.declensionNum(
//   minutes,
//   ['хвилина', 'хвилини', 'хвилин']
// );
// this.rootSelector.querySelector('.js-timer__seconds').dataset.title = this.declensionNum(
//   seconds,
//   ['секунда', 'секунди', 'секунд']
// );

// pad(value) {
//   return String(value).padStart(2, 0);
// },

// declensionNum(num, words) {
//   return words[
//     num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//   ];
// },
