// init weather object
const weather = new Weather(city);

// init UI 
const ui = new UI();

// change city on clicking submit button
const goBtn = (e) => {
  const input = document.getElementById('city-input');
  input.value ? console.log(input.value): console.log('Please enter a city name');
  const city = input.value;
  console.log(city);

  weather.pickCity(city);
  console.log(weather);
  getWeather();

  e.preventDefault();
}

const getWeather = () => {
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err))
}

// add event listener to submit button
const form = document.getElementById('weather-form');
form.addEventListener('submit', goBtn);


