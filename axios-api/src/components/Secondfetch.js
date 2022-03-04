import React from "react";
//import { useEffect } from 'react'
//import Weather from './Weather';


export default class Secondfetch extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {},
      locations: 'london'
    };
    //let datetime = new Date();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.locations}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
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
        this.setState({
          weather: object,
          locations: e.target.value
        });
        console.log(this.state);
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { weather, locations } = this.state;
    if (!weather) {
      return (
        <h2>No weather found !</h2>
      );
    } else {
      return (
        <div className="api--fetch">
          <div className="wrapper">
            <div className="class--search">
              <h3>Enter location</h3>
              <input
                type="text"
                value={locations}
                onChange={(e) => this.setState({locations: e.target.value})}
                placeholder="Enter location"
                className="location--input"
              />
              <button className="btn--location" onClick={this.handleChange}>
                Search Location
              </button>
            </div>
            <h3>{locations}</h3>
            <div className="app--data">
              <p className="class--temp">City: { weather?.name }</p>
              <p className="class--temp">Country: { weather?.sys?.country }</p>
              <p className="class--temp">Temperature: { weather?.main?.temp} C°</p>
              <p className="class--temp">Weather: { weather?.weather?.[0]?.description }</p>
              <p className="class--temp">Wind: { weather?.wind?.deg } deg</p>
              <p className="class--temp">Wind Speed: { weather?.wind?.speed } mph</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
