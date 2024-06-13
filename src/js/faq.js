import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqList = document.querySelector('.faq-list');
const faqItems = faqList.querySelectorAll('.faq-item');

new Accordion(faqList, {
  duration: 400,
  showOne: true,
  showMultiple: false,
  onToggle: function (event) {
    const clickedButton = event.target.closest('.questions');
    const clickedItem = clickedButton.parentNode;

    faqItems.forEach(item => item.classList.remove('is-active'));
    clickedItem.classList.toggle('is-active');

    const previousItem = clickedItem.previousElementSibling;
    if (previousItem) {
      previousItem.style.borderBottom = clickedItem.classList.contains(
        'is-active'
      )
        ? 'none'
        : '';
    }
  },
});

document.querySelectorAll('.faq-item .btn-answear').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const listItem = btn.closest('.faq-item');
    listItem.classList.toggle('is-active');
  });
});
