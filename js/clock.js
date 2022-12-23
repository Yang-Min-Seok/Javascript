const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    // padStarts, padEnds only works with "strings"
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() // call getClock immediately
setInterval(getClock, 1000); // call getClock every 1 sec