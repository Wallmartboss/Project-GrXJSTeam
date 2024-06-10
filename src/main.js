document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
      });
    }
  });
});
let openbutton = document.getElementById('openbutton');
openbutton.onclick = function openModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.add('is-open');
};
let closebutton = document.getElementById('closebutton');
closebutton.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
let ab_us = document.getElementById('ab_us'); /* 2 */
ab_us.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
let ctlg = document.getElementById('ctlg'); /* 3 */
ctlg.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
let sl = document.getElementById('sl'); /* 4 */
sl.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
let rvw = document.getElementById('rvw'); /* 5 */
rvw.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
let cntc = document.getElementById('cntc'); /* 6 */
cntc.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
