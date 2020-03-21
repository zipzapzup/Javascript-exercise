// Init weather object
const weather = new Weather('Sydney', 'NSW');

// weather.changeLocation('Jakarta');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
        .then(results => {
        console.log(results)
        })
        .catch(err => console.log(err));

}

