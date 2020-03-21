// Init weather object
const weather = new Weather('Sydney', 'NSW');
// Init UI object
const ui = new UI();

// weather.changeLocation('Jakarta');
// API Endpoint: http://api.openweathermap.org

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));

}

