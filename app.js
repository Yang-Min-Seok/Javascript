const h1 = document.querySelector('.hello h1');

function handleTitleClick() {
    
    const curr_color = h1.style.color; // can not change
    let newColor; // can change
    
    if (curr_color === 'blue') {
        newColor = 'tomato';
    } else {
        newColor = 'blue';
    }
    
    h1.style.color = newColor
}

h1.addEventListener('click', handleTitleClick);