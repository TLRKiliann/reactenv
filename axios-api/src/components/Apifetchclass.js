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
      .then((object) => {
        this.setState({
          weather: object,
          locations: e.target.value
          
        })
      })
  }

  render() {
    const { locations, weather } = this.state;
    /*if (!locations) {
      return (
        <h3>There is a pbm with locations !</h3>  
      );
    } else {*/
      return (
        <div>
          <input 
            type='text' 
            value={locations} 
            onChange={(e) => this.setState({locations: e.target.value})}
          />
          {locations}
          <button 
            onClick={this.handleChange}>Button
          </button>
          <h2>
            {weather?.name}
          </h2>
          <h2>
            {weather?.main?.temp}
          </h2>
        </div>
      );
    }
  
}
