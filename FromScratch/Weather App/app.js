// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather( weatherLocation.city ,'NSW');
// Init UI object
const ui = new UI();

// weather.changeLocation('Jakarta');
// API Endpoint: http://api.openweathermap.org

document.getElementById('w-change-btn').addEventListener('click', (e) => {

   const city = document.querySelector('#city').value;
   // const state = document.getElementById('state').value;

   // Change Location
   weather.changeLocation(city);

   storage.setLocationData(city);

   // Get and display weather

   getWeather();

   // Close modal
   $('#locModal').modal('hide');
   
});

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));

}

