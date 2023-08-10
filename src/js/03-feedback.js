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

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function onCheckStorage() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}
