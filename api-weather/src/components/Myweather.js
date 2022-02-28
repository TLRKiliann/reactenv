/*import React from 'react'
import Conditions from './Conditions';

export default function Myweather() {
  let [city, setCity] = React.useState('lausanne');
  let [unit, setUnit] = React.useState('imperial', 'metric');
  let [responseObj, setResponseObj] = React.useState({})
  let [error, setError] = React.useState(false);
  let [loading, setLoading] = React.useState(false);

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true)
    }
    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    setLoading(true);

    //let uriEncodedCity = encodeURIComponent(city);
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${city}%2C%20ch&units=${unit}%2C%20${unit}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "3c7e590618mshb15d86c264d2ad3p190cc9jsnf9669107feca"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error()
          console.log('fetch is not ok', response.cod)
        } else {
          console.log('fetch ok', response.cod)
        }
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      })
  }
  return (
    <div>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
            />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
            />
          Celcius
        </label>
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions
        responseObj={responseObj}
        error={error} //new
        loading={loading} //new
      />
  </div>
  );
}
*/
import React from 'react'
//import axios from "axios"
  
export default class Myweather extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          items: {},
          DataisLoaded: false,
          searCity: ''
      };
  this.componentDidMount = this.componentDidMount.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    e.preventDefault()
    const { type, value, name } = this.state;
    setState(state => ({
      searCity: e.target.value
    )})
  }
  componentDidMount() {
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=lausanne%2C%20ch&units=metric%2C%20imperial`, {
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
    console.log(this.state)
      /*.catch(() => {
        alert('Failed to fetch !');
      });*/
      //.catch((error) => console.log(error));
    })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1></div>;
    else if (DataisLoaded) {
      console.log(this.state)
    }
    if ( searCity === input ) {
      return (
        items.map((item) => (
          <div>
            <h3>{item.id}</h3>
            <h3>{item.id}</h3>
          </div>
        ))
      );
    }
    return (
      <div className="div--api">
        <h3 className='div--titapi'> Fetch data from an api in react </h3> {
          items.map((item) => (
            <nav key={ item.id } className='div--apinav'>
              <ol>City: { item.city.name }</ol>
              <ol>Lat: { item.city.coord.lat }</ol>
              <ol>Lon: { item.city.coord.lon }</ol>
              <ol>Country: { item.city.country }</ol>
              <ol>Population: { item.city.population }</ol>
              <ol>Weather: { item.list[0].weather[0].description }</ol>
              <ol>Wind: { item.list[0].wind.speed }</ol>
            </nav>
        ))
        }
        <input
          type={ this.state.input }
          onClick={ this.handleChange }
          name={ this.state.searCity }
          value={ this.state.searCity }
          placeholder='Enter a city'
        />
      </div>
    );
  }
}