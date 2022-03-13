import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),
      1000
    );
  }
  //Display date when timerID has changed
  //Is it necessary ?
  /*componentDidUpdate() {
    if (this.timerID !== this.state.Date) {
      console.log("Second display : ", this.state.date.toLocaleTimeString())
    }
  }*/

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    //console.log("At first", this.state.date)
    return (
      <div>
        <h1>Heure actuelle !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}