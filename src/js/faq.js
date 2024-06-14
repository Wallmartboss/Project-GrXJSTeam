import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainer = document.querySelector('.faq__list');
new Accordion(accordionContainer, {
  elementClass: 'faq__item',
  triggerClass: 'faq__btn',
  panelClass: 'ac-panel',
  activeClass: 'is-active',
  openOnInit: [0],
});
