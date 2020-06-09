// fetch weather from api
class Weather {
  constructor(city) {
    this.apiKey = '169de6c9900f76e888c2a88f696ce22e',
    this.city = city
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
    
    const responseData = await response.json();
    console.log(responseData);

    return responseData;

  }

  pickCity(city) {
    this.city = city
  }
}

// const weather1 = new Weather('london');
// weather1.getWeather()