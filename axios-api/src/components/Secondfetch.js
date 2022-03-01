import React from "react";
//import { useEffect } from 'react'
//import Weather from './Weather';


export default class Secondfetch extends React.Component {
  constructor() {
    super();
    this.weather = {};
    this.locations = 'london';
    //let datetime = new Date();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.locations}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
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
        this.setWeather(object);
        console.log(object);
      })
      .then((object) => {
        this.setWeather(object);
        console.log(object);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="api--fetch">
        <div className="wrapper">
          <div className="class--search">
            <h3>Enter location</h3>
            <input
              type="text"
              value={this.locations}
              onChange={(e) => this.setLocations(e.target.value)}
              placeholder="Enter location"
              className="location--input"
            />
            <button className="btn--location" onClick={this.handleChange}>
              Search Location
            </button>
          </div>
          
          <div className="app--data">
            <p className="class--temp">City: {this.weather?.name}</p>
            <p className="class--temp">Country: {this.weather?.sys?.country}</p>
            <p className="class--temp">Temperature: {this.weather?.main?.temp} C°</p>
            <p className="class--temp">Weather: {this.weather?.weather?.[0]?.description}</p>
            <p className="class--temp">Wind: {this.weather?.wind?.deg} deg</p>
            <p className="class--temp">Wind Speed: {this.weather?.wind?.speed} mph</p>
          </div>
        </div>
      </div>
    );
  }
}
