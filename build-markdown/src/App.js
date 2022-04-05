import React from 'react';
import { marked } from 'marked';
//import { useState, useEffect } from 'react';
// or const { marked } = require('marked');
import './App.css';


//const initialState =

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      code: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }
  render() {
    const { text } = this.state;

    const markdown = marked(text);

    return (
      <div className="App">
          <h1>Title</h1>
          <textarea id='editor' value={text} onChange={(e) => this.handleChange(e)} />
          <div className='col-6 preview' id='preview'>
            <div>JUSTE POUR VOIR !!!</div>

            <div className='preview' dangerouslySetHTML={{__html: markdown}} />


          </div>
      </div>
    );
  }
}

export default App;