import React from 'react'
import Conditions from './Conditions';

export default function Myweather() {
  let [city, setCity] = React.useState('lausanne');
  let [unit, setUnit] = React.useState('imperial', 'metric');
  let [responseObj, setResponseObj] = React.useState({})
  let [error, setError] = React.useState(false);
  let [loading, setLoading] = React.useState(false);

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true)
    }
    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    setLoading(true);

    //let uriEncodedCity = encodeURIComponent(city);
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${city}%2C%20ch&units=${unit}%2C%20${unit}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "3c7e590618mshb15d86c264d2ad3p190cc9jsnf9669107feca"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error()
          console.log('fetch is not ok', response.cod)
        } else {
          console.log('fetch ok', response.cod)
        }
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      })
  }
  return (
    <div>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
            />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
            />
          Celcius
        </label>
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions
        responseObj={responseObj}
        error={error} //new
        loading={loading} //new
      />
  </div>
  );
}
