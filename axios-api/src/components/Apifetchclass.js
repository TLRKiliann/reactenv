import React from 'react'


export default class Apifetchclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: 'Lausanne',
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
        console.log(this.state)
      })
  }
  render() {
    //! important !
    const { locations, weather } = this.state;
    if (!weather) {
      return (
        <h3>No weather found !</h3>  
      );
    } else {
      return (
        <div>
          <input 
            type='text' 
            value={locations} 
            onChange={(e) => this.setState({locations: e.target.value})}
          />
          <button 
            onClick={this.handleChange}>Button
          </button>
          <p>{locations}</p>
          <h3>
            City: {weather?.name}
          </h3>
          <h3>
            Country: {weather?.sys?.country}
          </h3>
          <h3>
            Temperature: {weather?.main?.temp} C°
          </h3>
        </div>
      );
    }
  }
}
