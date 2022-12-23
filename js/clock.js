const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date()
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock() // call getClock immediately
setInterval(getClock, 1000);