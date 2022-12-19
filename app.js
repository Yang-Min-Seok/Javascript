const title = document.querySelector('.hello:nth-child(1)')

function handleTitleClick() {
    // we can change color too!
    title.style.color='blue';
}

// add click event
title.addEventListener("click", handleTitleClick);