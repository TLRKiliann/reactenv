import React from 'react';
//import './styles.css';
//import { Card } from 'semantic-ui-react'

function Weather({weatherData}) {
  return (
    <div>
        <h3 className="h3--class">{weatherData.name}</h3>
    </div>
  )
}

export default Weather;
/*
        <p>Temprature: {weatherData.main.temp}</p>
        <p>Sunrise: {weatherData.sys.sunrise}</p>
        <p>Sunset: {weatherData.sys.sunset}</p>
        <p>Description: {weatherData.weather[0].description}</p>
*/