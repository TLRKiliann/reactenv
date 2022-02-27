import React from 'react'


export default function Myweather() {
  let [responseObj, setResponseObj] = React.useState({});

  function getForecast(e) {
    e.preventDefault();
    fetch("https://community-open-weather-map.p.rapidapi.com/climate/month?q=San%20Francisco", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "3c7e590618mshb15d86c264d2ad3p190cc9jsnf9669107feca"
      }
    })
    .then(response => response.json())
    .then(response => {
      setResponseObj(response)
    })
    .catch(err => {
      console.error(err);
    });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
        <div>
           {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
}
