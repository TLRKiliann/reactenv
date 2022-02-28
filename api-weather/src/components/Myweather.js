import React from 'react'
//import axios from "axios"
  
export default class Myweather extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          items: {},
          id: '',
          name: '',
          city: '',
          population: '',
          coord: '',
          DataisLoaded: false,
          value: '',
      };
  this.componentDidMount = this.componentDidMount.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name} = event.target
    this.setState(prevFormData => {
      return {
        ...prevFormData,
        //[event.target.name]: event.target.value
        //[name]: event.target.value
        [name]: event.target.value
      }
    })
  }

  componentDidMount() {
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${this.state.input}%2C%20ch&units=metric%2C%20imperial`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "3c7e590618mshb15d86c264d2ad3p190cc9jsnf9669107feca"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
    //console.log(this.state)
      /*.catch(() => {
        alert('Failed to fetch !');
      });*/
      //.catch((error) => console.log(error));
    })
  }
  render() {
    const { DataisLoaded } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1></div>;
    else if (DataisLoaded) {
      console.log(this.state)
    }
    return (
      <div className="div--api">
        <h3 className='div--titapi'> Fetch data from an api in react </h3>
        <nav key={ this.state.id } className='div--apinav'>
          <ol>City: { this.state.city }</ol>
          <ol>Population: { this.state.population }</ol>
          <ol>Latitude: { this.state.coord.lat }</ol>
          <ol>Longitude: { this.state.coord.lon }</ol>
        </nav>
        <input
          type="input"
          onChange={this.handleChange}
          placeholder="Enter a city"
          name='city'
          value={ this.setState.input }
        />
        <button type='button' onClick={ this.handleChange }>Click !</button>
        <div>
          <h3 onChange={this.handleChange}>{this.state.input}</h3>
        </div>
      </div>
    );
  }
}

/*
<ol>Population: { this.state.city.list[0].weather[0].description }</ol>


          <h3 onChange={this.handleChange}>{ this.state.items.id }</h3>
              <ol>Lat: { this.state.input.coord.lat }</ol>
              <ol>Lon: { this.state.input.coord.lon }</ol>
              <ol>Country: { this.state.input.country }</ol>
              <ol>Population: { this.state.input.population }</ol>
              <ol>Weather: { this.state.items.list[0].weather[0].description }</ol>
              <ol>Wind: { this.state.items.list[0].wind.speed }</ol>
*/