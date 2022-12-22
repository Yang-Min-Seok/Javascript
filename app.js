const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
    // avoid refreshing (Default)
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener('submit', onLoginSubmit);
// JS calls function with some "information(arguments)"