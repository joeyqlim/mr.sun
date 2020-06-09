// save ui elements to variables
class UI {
  constructor() {
    this.city = document.getElementById('city');
    this.cityInput = document.getElementById('city-input');
    this.cityName = document.getElementById('city-name');
    this.sunrise = document.getElementById('sunrise');
    this.sunset = document.getElementById('sunset');
  }

  paint(weather) {
    this.cityName.innerHTML = `<div class="card-body bg-dark text-center" id="city-name"><h2>${weather.name}</h3></div>`,
    this.cityInput.value = '',

    // convert sunrise and sunset data to local time
    this.sunrise.textContent = new Date(weather.sys.sunrise *1000).toTimeString(),
    this.sunset.textContent = new Date(weather.sys.sunset *1000).toTimeString();
  }
}
