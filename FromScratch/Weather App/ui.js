class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.city.name;
        this.desc.textContent = weather.list["0"].weather["0"].description;
        this.string.textContent = weather.list["0"].main.temp + " °C";
        this.humidity.textContent = `Humidity: ${weather.list["0"].main.humidity}`;
        this.feelslike.textContent = `Feels like: ${weather.list["0"].main.feels_like}`;
        this.wind.textContent = `Wind Speed: ${weather.list["0"].wind.speed}`;
        this.dewpoint.textContent = `Time of Observed Weather: ${weather.list["0"].dt_txt}`;

    }

}