import React from 'react'
import dataFile from './dataFile'

export default class Classtestext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      style: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  handleChange(e) {
    this.setState({inputText: e.target.value});
  }
  toggle() {
    this.setState(prevCo => !prevCo.inputText)
  }
  render() {

    const {inputText} = this.state;

    return (
      <div style={{ fontSize: '1.6rem', textAlign: "center" }}>
        <input
          
          value={inputText}
          onChange={(e) => this.setState({ inputText: e.target.value })}
          style={{ fontSize: '1.2rem' }}
        />
        <p style={{ fontSize: '1.4rem' }}>{inputText}</p>

        { dataFile.map(item => {
            if (item.name === inputText) {
              return (
                <div>
                  <p key={item.id}>{item.name} {item.temperature}</p>
                  <button
                    style={inputText === item.name ? {color: 'blue'} : {color: 'red'}} 
                    onClick={() => alert(item.name + ' ' + item.temperature)}
                  >
                    Click me
                  </button>
                </div>
                );
            } else {
              return false;
            }
          })
        }
      </div>
    );
  }
}

