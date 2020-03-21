class Weather {
    constructor(city, state) {
        this.apiKey = '0b1b1cd6fccb8a40d3a81ba818cdeb31';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData.list

    }


    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}