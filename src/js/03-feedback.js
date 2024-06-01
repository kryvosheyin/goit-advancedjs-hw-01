import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const LS_KEY = 'feedback-form-state';

const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LS_KEY)) || {};
};

const saveToLocalStorage = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(feedbackState));
}, 1000);

const onSubmit = event => {
  event.preventDefault();
  const submittedObject = loadFromLocalStorage();
  form.reset();
  localStorage.removeItem(LS_KEY);
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
