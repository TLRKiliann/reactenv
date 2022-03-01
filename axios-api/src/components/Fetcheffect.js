import React, { useState } from "react";
//import { useEffect } from 'react'
//import Weather from './Weather';


export default function Fetcheffect() {
  let datetime = new Date()
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState('london');

  //Only usable with function
  //Don't need react-datetime with useEffect !
  /*useEffect(() => {
    handleChange();
  });*/
  //And not => "}, []);" error if empty

  function handleChange() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(object);
      })
      .catch((error) => console.log(error));
  }
  //await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  //fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.REACT_APP_API_KEY}`)
  return (
    <div className="api--fetch">
      <div className="wrapper">
        <div className="class--search">
          <h3>Enter location</h3>
          <input
            type="text"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Enter location"
            className="location--input"
          />
          <button className="btn--location" onClick={handleChange}>
            Search Location
          </button>
        </div>
        <h3>Clock: {datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()}</h3>
        <div className="app--data">
          <p className="class--temp">City: {weather?.name}</p>
          <p className="class--temp">Country: {weather?.sys?.country}</p>
          <p className="class--temp">Temperature: {weather?.main?.temp} C°</p>
          <p className="class--temp">Weather: {weather?.weather?.[0]?.description}</p>
          <p className="class--temp">Wind: {weather?.wind?.deg} deg</p>
          <p className="class--temp">Wind Speed: {weather?.wind?.speed} mph</p>
        </div>
      </div>
    </div>
  );
}
