# weather-api (npm)

Secondfetch.js is the most interesting app. It works with **openmapweather** by a fetch() into a class.

---

.env : REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
${process.env.REACT_APP_API_KEY}

```
  handleChange(e) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.locations}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log('Status : ', res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
```

Promise :

```
    .then((object) => {
    this.setState({
      weather: object,
      locations: e.target.value
    });
    console.log(this.state);
    })
    .catch((error) => console.log(error));
```

`input : onChange={(e) => this.setState({locations: e.target.value})}`

`button : onClick={this.handleChange}`

```
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
```

If 'weather' doesn't exist => no weather found !
Else return all DATA.

```
  render() {
    const { weather, locations } = this.state;
    if (!weather) {
      return (
        <h2>No weather found !</h2>
      );
    } else {
      return (
```