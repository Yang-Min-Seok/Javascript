const title = document.querySelector('.hello h1');

// * how to find events we can use with JS *
console.dir(title); // the things starts with on ~ are events !!

function handleMouseClick() {
    title.style.color = 'blue';
}

function handleMouseEnter() {
    title.innerText = 'Mouse is here!';
}

function handleMouseLeave() {
    title.innerText = 'Mouse is gone!';
}

title.addEventListener("click", handleMouseClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);