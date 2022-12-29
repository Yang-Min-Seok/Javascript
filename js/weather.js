const API_KEY = 'a9476e390a2d512706762d42281be652';
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weather = document.querySelector('#weather span:nth-child(1)');
        const city = document.querySelector('#weather span:nth-child(2)');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoErr() {
    alert(`Can't find you, No weather for you.`)
}

// call user's location info
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)