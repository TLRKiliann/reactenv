import React from 'react';
//import $ from 'jquery'
import { FaTwitter } from "react-icons/fa";
/*
export default function App() {
  return (
    <div>
      <IconName />
    </div>
  )
}
*/

class MachineQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textQuote: [],
      authorQuote:'',
      color: 'lightblue'
    };
    this.customNewQuote = this.customNewQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this)
  }

  customNewQuote() {
    const colors = ["gray", "blue", "orange", "green", "red", "purple"];
    this.props.onChangeAppColor(colors[Math.floor((Math.random() * 6) + 1)]);
    this.handleNewQuote();
  }

  handleNewQuote() {
    const app = this;
    fetch('https://type.fit/api/quotes')
      .then(response => {
        return response.json();
      })
      .then(function(data) {
        const index = Math.floor((Math.random() * data.length) + 1);
        app.setState({
          textQuote: data[index].text,
          authorQuote: data[index].author
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Random Quote Machine</h1>

        <div id='quote-box'>
          <div id='text'>{this.state.textQuote}</div>
          <div id='author'>{this.state.authorQuote}</div>
        </div>

        <div id='new-quote'>
          <button onClick={this.handleNewQuote}>New Quote</button>

          <a className="btn btn-primary"
             data-bs-toggle="collapse"
             href="https://twitter.com/intent/tweet/?text={ this.state.textQuote }"
             target="_blank"
             rel='noreferrer'
             role="button"
             aria-expanded="false"
             aria-controls="collapseExample">
            <FaTwitter />
          </a>
        </div>
      </div>
    );
  }
}

export default MachineQuote;
