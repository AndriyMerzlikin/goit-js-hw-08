const STORAGE_KEY = 'feedback-form-state';

const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const input = document.querySelector('.feedback-form input');

const textarea = document.querySelector('.feedback-form textarea');

input.addEventListener('input', throttle(onInput, 500));
textarea.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

onCheckStorage();

function onInput() {
  const data = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onCheckStorage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}
