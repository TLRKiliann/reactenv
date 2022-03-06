import React, { useState } from "react";
//import TimezonePicker from 'react-timezone';
//import { useEffect } from 'react'
//import Weather from './Weather';


export default function Fetcheffect() {
  let datetime = new Date()
  let convDate = (datetime.getHours() + 1) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
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
  function callConverter() {
    if (weather?.timezone === 0) {
      let convDate = (datetime.getHours()) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;

    } else if (weather?.timezone === 3600) {
      let convDate = (datetime.getHours() + 1) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -3600) {
      let convDate = (datetime.getHours() - 1) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 7200) {
      let convDate = (datetime.getHours() + 2) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -7200) {
      let convDate = (datetime.getHours() - 2) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 10800) {
      let convDate = (datetime.getHours() + 3) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -10800) {
      let convDate = (datetime.getHours() - 3) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 12600) {
      let convDate = (datetime.getHours() + 3) + ":" + (datetime.getMinutes() + 30) + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -12600) {
      let convDate = (datetime.getHours() - 3) + ":" + (datetime.getMinutes() - 30 ) + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 14400) {
      let convDate = (datetime.getHours() + 4) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -14400) {
      let convDate = (datetime.getHours() - 4) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -18000) {
      let convDate = (datetime.getHours() - 5) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 18000) {
      let convDate = (datetime.getHours() + 5) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 21600) {
      let convDate = (datetime.getHours() + 6) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -21600) {
      let convDate = (datetime.getHours() - 6) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -25200) {
      let convDate = (datetime.getHours() - 7) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 25200) {
      let convDate = (datetime.getHours() + 7) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -28800) {
      let convDate = (datetime.getHours() - 8) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 28800) {
      let convDate = (datetime.getHours() + 8) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -32400) {
      let convDate = (datetime.getHours() - 9) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 32400) {
      let convDate = (datetime.getHours() + 9) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -36000) {
      let convDate = (datetime.getHours() - 10) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 36000) {
      let convDate = (datetime.getHours() + 10) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -39600) {
      let convDate = (datetime.getHours() - 11) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 39600) {
      let convDate = (datetime.getHours() + 11) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -43200) {
      let convDate = (datetime.getHours() - 12) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 43200) {
      let convDate = (datetime.getHours() + 12) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === -46800) {
      let convDate = (datetime.getHours() - 13) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    } else if (weather?.timezone === 46800) {
      let convDate = (datetime.getHours() + 13) + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
      return convDate;
    }
  }
  const searchConverter = callConverter()
  //await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  //fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.REACT_APP_API_KEY}`)
  return (
    <div className="api--fetch">
      <div className="wrapper">
        <div className="class--search">
          <h3>Enter location :</h3>
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
        <div className='div--hour'>
          <h3>
            Location Clock: {datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()}
          </h3>
          <div className='div--searchconvert'>
            <h3 style={{color: 'white'}}>
              Timezone of search:
            </h3> 
            <h2 style={{color: 'turquoise'}}>
              { (weather?.timezone === 3600) ? convDate : searchConverter }
            </h2>
          </div>
        </div>
        <div className="app--data">
          <div className='data--city'>
            <p className="class--temp">City: {weather?.name}</p>
            <p className="class--temp">Country: {weather?.sys?.country}</p>
            <p className="class--temp">Latitude: {weather?.coord?.lat}</p>
            <p className="class--temp">Longitude: {weather?.coord?.lon}</p>
          </div>
          <div className='data--weather'>
            <p className="class--temp">Temperature: {weather?.main?.temp} C°</p>
            <p className="class--temp">Weather: {weather?.weather?.[0]?.description}</p>
            <p className="class--temp">Wind: {weather?.wind?.deg} deg</p>
            <p className="class--temp">Wind Speed: {weather?.wind?.speed} mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}
//{datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()}
/*
        <TimezonePicker
          value={locations}
          onChange={timezone => console.log({locations}, timezone)}
          style={{background: 'black'}}
          inputProps={{
          placeholder: 'Select Timezone...',
          name: 'timezone',
          }}
        />
*/

          //{JSON.stringify(datetime)}