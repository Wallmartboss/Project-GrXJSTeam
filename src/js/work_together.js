import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { postData } from './portfolio-api';

const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const localStorageEmailKey = 'user-email';
const localStorageCommentKey = 'user-comment';

const form = document.querySelector('.work-together-form');
const emailInput = document.querySelector('.work-together-input-email');
const commentInput = document.getElementById('user-comment');
const inputFields = document.querySelector('.form-fields');
const backdrop = document.querySelector('.backdrop');
const emailIcon = document.querySelector('.work-together-form-icon');

loadFormData();

emailInput.addEventListener('input', validateEmail);
commentInput.addEventListener('input', validateComment);
form.addEventListener('submit', submitForm);
form.addEventListener('input', handleFormInput);
document.addEventListener('keydown', handleEscapeKey);
backdrop.addEventListener('click', handleBackdropClick);

function validateEmail() {
  const email = emailInput.value.trim();
  const isValid = emailRegex.test(email);

  emailInput.classList.toggle('valid', isValid);
  emailInput.classList.toggle('invalid', !isValid);

  inputFields.dataset.status = isValid
    ? 'Success!'
    : 'Invalid email, try again';
  inputFields.classList.toggle('new-color', !isValid);
  emailInput.classList.toggle('new-color', !isValid);
  emailIcon.style.display = isValid ? 'block' : 'none';
}

function validateComment() {
  const comment = commentInput.value.trim();
  const isValid = comment.length >= 3;

  commentInput.classList.toggle('valid', isValid);
  commentInput.classList.toggle('invalid', !isValid);
}

async function submitForm(e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim().toLowerCase();
  const commentValue = commentInput.value.trim();

  const userData = { email: emailValue, comment: commentValue };

  try {
    await postData(userData);
    clearFormData();
    resetForm();
    emailIcon.style.display = 'none';
    backdrop.classList.add('is-open');
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'An error occurred while sending the request. Try again.',
    });
  }
}

function handleFormInput() {
  const email = emailInput.value;
  const comment = commentInput.value;

  saveFormData(email, comment);
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function handleBackdropClick(e) {
  if (e.target === backdrop || e.target.closest('.modal-close-btn')) {
    closeModal();
  }
}

function closeModal() {
  resetForm();
  backdrop.classList.remove('is-open');
}

function resetForm() {
  inputFields.dataset.status = '';
  emailInput.classList.remove('valid', 'invalid');
  commentInput.classList.remove('valid', 'invalid');
  form.reset();
}

function saveFormData(email, comment) {
  localStorage.setItem(localStorageEmailKey, email);
  localStorage.setItem(localStorageCommentKey, comment);
}

function loadFormData() {
  emailInput.value = localStorage.getItem(localStorageEmailKey) || '';
  commentInput.value = localStorage.getItem(localStorageCommentKey) || '';
}

function clearFormData() {
  localStorage.removeItem(localStorageEmailKey);
  localStorage.removeItem(localStorageCommentKey);
}
