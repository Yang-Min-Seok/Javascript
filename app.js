const h1 = document.querySelector('.hello h1');

function handleTitleClick() {

    // toggle =>
    // if exists => remove
    // else => add
    h1.classList.toggle('clicked');
    
}

h1.addEventListener('click', handleTitleClick);