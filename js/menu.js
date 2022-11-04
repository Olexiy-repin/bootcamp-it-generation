'use strict';
// Функціональний підхід
// const menuEl = document.querySelector('.js-menu');

// const load = () => {
//   console.log('loading...');
// };

// const save = () => {
//   console.log('saving...');
// };

// const search = () => {
//   console.log('searching...');
// };

// const onMenuBtnClick = event => {
//   const target = event.target;

//   if (target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const btnAction = target.dataset.action;

//   switch (btnAction) {
//     case 'load': {
//       load();
//       break;
//     }

//     case 'save': {
//       save();
//       break;
//     }

//     case 'search': {
//       search();
//       break;
//     }
//   }
// };

// menuEl.addEventListener('click', onMenuBtnClick);

// ООП підхід
class Menu {
  constructor(rootSelector) {
    rootSelector.addEventListener('click', this.onMenuBtnClick.bind(this));
  }

  load() {
    console.log('loading...');
  }

  save() {
    console.log('saving...');
  }

  search() {
    console.log('searching...');
  }

  onMenuBtnClick(event) {
    const target = event.target;

    if (target.nodeName !== 'BUTTON') {
      return;
    }

    const btnAction = target.dataset.action;
    this[btnAction]();

    // switch (btnAction) {
    //   case 'load': {
    //     this.load();
    //     break;
    //   }
    //   case 'save': {
    //     this.save();
    //     break;
    //   }
    //   case 'search': {
    //     this.search();
    //     break;
    //   }
    // }
  }
}

new Menu(document.querySelector('.js-menu'));
new Menu(document.querySelector('.js-second-menu'));
