const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(event) {
    // avoid refreshing (Default)
    event.preventDefault();
    console.log(loginInput.value);
};

loginForm.addEventListener('submit', onLoginSubmit);

// JS calls function with some "information"