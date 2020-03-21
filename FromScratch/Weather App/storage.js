class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Sydney';
 
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
        
    }


}