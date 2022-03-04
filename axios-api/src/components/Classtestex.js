import React from 'react'
import dataFile from './dataFile'

export default class Classtestext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      locations: e.target.value
    });
  }
  render() {
    const { locations, weather } = this.state;
    const data = dataFile.map(weather => <h2>City: {weather.name} Temps: {weather.temperature}</h2>)
    if (!weather) {
      return (
        <h2>No weather registered !</h2>
      );
    } else {
      return (
        <div>
          <h3>
            Weather by City :
          </h3>
          <input
            type='text'
            value={locations}
            onChange={(e) => this.setState({locations: e.target.value})}
          />
          {locations}
          <button
            type='button'
            onClick={this.handleChange}
          >
            Click    
          </button>
          <div>
            {data}
          </div>
        </div>
      );
    }
  }
}