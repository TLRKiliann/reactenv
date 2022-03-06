import React from "react";

export default class Toggleskills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Lsne',
      butt: '',
      color: 'Blue'
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevent => ({
      ...prevent,
      butt: !this.state.butt
    }))
  }
  changeFunc() {
    this.setState(prevState => ({
      ...prevState,
      city: !this.state.city
    }))
  }
  render() {
    return (
      <div>
        <h3>My tester</h3>
        {this.state.butt && <p onChange={this.changeFunc}>{this.state.city ? 'Lsne' : 'Fallcity'}</p>}
        {!this.state.butt && <p onChange={this.changeFunc}>{this.setState.city ? 'Lsne' : 'Fallcity'}</p>}

        {this.state.butt && <p onChange={this.toggle}>{this.state.color ? 'Blue' : 'Red'}</p>}
        {!this.state.butt && <p onChange={this.toggle}>{this.setState.color ? 'Blue' : 'Red'}</p>}

        <button onClick={this.toggle}>{this.state.butt ? 'ok' : 'not ok'}</button>
      </div>
    );
  }
}