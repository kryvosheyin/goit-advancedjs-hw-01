import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('feedback-form-state')) || {};
};

const saveToLocalStorage = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 1000);

const onSubmit = event => {
  event.preventDefault();
  const submittedObject = loadFromLocalStorage();
  form.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(submittedObject);
};

document.addEventListener('DOMContentLoaded', () => {
  const { email = '', message = '' } = loadFromLocalStorage();
  emailInput.value = email;
  messageInput.value = message;

  emailInput.addEventListener('input', saveToLocalStorage);
  messageInput.addEventListener('input', saveToLocalStorage);
});

form.addEventListener('submit', onSubmit);
