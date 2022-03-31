import React from 'react';
import $ from 'jquery'
import { FaTwitter } from "react-icons/fa";


class MachineQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textQuote: '',
      authorQuote: '',
    };
    this.customNewQuote = this.customNewQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this)
  }

  jQuerycode = () => {
    const colors = ["grey", "blue", "orange", "green", "red", "purple"];
    const colorsBody = ["grey", "lightblue", "lightorange", "lightgreen", "lightred", "lightpink"];
    const colorText = ['white', 'cyan', 'yellow'];

    const spectralcolor = (colors[Math.floor((Math.random() * 6) + 1)]);
    const bodyColor = (colorsBody[Math.floor((Math.random() * 6) + 1)]);
    const spectralText = (colorText[Math.floor((Math.random() * 3) + 1)]);

    $("button").click(function () {
      $("body").css({ backgroundColor : bodyColor})
      $("#quote-box").css({ backgroundColor : spectralcolor})
      $("#quote-box").css({color: spectralText})

    })
    this.handleNewQuote()
  };

  customNewQuote() {
    this.jQuerycode()
  }

  componentDidMount() {
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
      <div className="machine--class">
        <h1>Random Quote Machine</h1>

        <div className='turn--class'>
          <div id='quote-box'>
            <div id='text'>{this.state.textQuote}</div>
            <div id='author'>{this.state.authorQuote}</div>
          </div>
        </div>

        <div id='new-quote'>
          <button 
            onClick={this.customNewQuote}
            className='btn btn--custom'>New Quote</button>

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
