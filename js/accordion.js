const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnElClick = event => {
  const accordionPanelEl = event.target.nextElementSibling;

  accordionPanelEl.classList.toggle('active');
};

accordionBtnsEl.forEach(el => {
  el.addEventListener('click', onAccordionBtnElClick);
});
