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
    this.setState(prevState => !prevState)
  }

  render() {

    const {inputText} = this.state;

    return (
      <div style={{ fontSize: '1.6rem', textAlign: "center" }}>
        <h3>Enter a name of City :</h3>
        <input
          
          value={inputText}
          onChange={(e) => this.setState({ inputText: e.target.value })}
          style={{ fontSize: '1.2rem' }}
        />
        { dataFile.map(item => {
          return (
            <button 
              style={item.name===inputText ? {'color':"blue"} : {'color':"red"}}
              onClick={this.toggle}
            >
            button
            </button>)
          })
        }
        <p style={{ fontSize: '1.4rem' }}>{inputText}</p>
        
        { dataFile.map(item => {
            if (item.name === inputText) {
              return (
                <div>
                  <p key={item.id}>{item.name} {item.temperature}</p>
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

//() => alert(item.name + ' ' + item.temperature)