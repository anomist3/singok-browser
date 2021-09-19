const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting');
const resetName = document.getElementById('reset-name');
const clockContainer = document.querySelector('#clockContainer');
const clock = document.querySelector('h2#clock')

const HIDDEN_CLASSNAME = 'hidden';

// USERNAME

function onLoginSubmit(e) {
  e.preventDefault();
  e.srcElement.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem('username', username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = '';
}

if (localStorage.getItem('username') !== null) {
  const savedUsername = localStorage.getItem('username');
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  resetName.classList.remove(HIDDEN_CLASSNAME);
}

function handleResetClick(e) {
  e.preventDefault();
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem('username');
}

loginForm.addEventListener('submit', onLoginSubmit);
resetName.addEventListener('click', handleResetClick);

// CLOCK

function getClock() {
  const date = new Date();
  const [hours, minutes, seconds] = [String(date.getHours()).padStart(2, '0'), String(date.getMinutes()).padStart(2, '0'), String(date.getSeconds()).padStart(2, '0')];
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);




