import React from 'react'


export default class Apifetchclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: 'lausanne',
      weather: {}
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.locations}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          weather: this.state.weather,
          locations: this.state.locations
        })
      })
  }

  render() {
    return (
      <div>
        <input 
          type='text' 
          value={this.state.locations} 
          onChange={(e) => this.setState(locations: e.target.value)}
        />
        <button 
          onClick={this.handleChange}>Button
        </button>
        <h2>
          {this.state.weather?.main?.temp}
        </h2>
      </div>
    );
  }
}
