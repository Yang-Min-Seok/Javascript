function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`You live in ${lat}, ${lng}`);
}
function onGeoErr() {
    alert(`Can't find you, No weather for you.`)
}
// call user's location info
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)