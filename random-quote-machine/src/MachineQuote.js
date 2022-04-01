import React from 'react';
import $ from 'jquery';
import { FaTwitter } from "react-icons/fa";
import './styles.scss';
import './App.css';


class MachineQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textQuote: '',
      authorQuote: '',
      colorText: ['lightpink', 'cyan', 'yellow'],
      colorQuote: ["grey", "blue", "orange", "green", "red", "purple"],
      colorsBody: ["lightgrey", "lightblue", "lightsalmon", "lightgreen",
        "lightcoral", "lightpink"],
      isLoaded: false
    };
    this.jQuerycode = this.jQuerycode.bind(this);
    //this.customNewQuote.bind(this) => already run with button
  }

  componentDidMount() {
    const catchData = this;
    fetch('https://type.fit/api/quotes')
      .then(response => {
        return response.json();
      })
      .then(function(data) {
        const index = Math.floor((Math.random() * data.length) + 1);
        catchData.setState({
          isLoaded: true,
          textQuote: data[index].text,
          authorQuote: data[index].author
        });
      });
  }

  jQuerycode = () => {
    const { colorText, colorQuote, colorsBody } = this.state;
    const spectralColor = (colorQuote[Math.floor((Math.random() * 6))]);
    const changeBodyCol = (colorsBody[Math.floor((Math.random() * 6))]);
    const spectralText = (colorText[Math.floor((Math.random() * 3))]);
    console.log('2colorsBody : ', spectralColor, spectralColor, spectralText)
    $("button").ready(function () {
      $("body").css({ "background-color": changeBodyCol});
      $(".turn--class").css({ "background-color": spectralColor});
      $(".turn--class").css({"color": spectralText});
    })
    this.componentDidMount();
  };

  customNewQuote() {
    this.jQuerycode()
  }

  render() {
    const { isLoaded, textQuote, authorQuote } = this.state;
    if (!isLoaded) {
      return <h2>No data loaded !</h2>
    } else {
      return (
        <div className="machine--class">

          <div className='turn--class'>
            <div id='quote-box'>
              <div id='text'>{textQuote}</div>
              <div id='author'>{authorQuote}</div>
            </div>

            <div id='new-quote'>
              <button 
                onClick={this.customNewQuote.bind(this)}
                className='btn btn--custom'>New Quote</button>

              <a className="btn btn-primary"
                 data-bs-toggle="collapse"
                 href="twitter.com/intent/tweet"
                 target="_blank"
                 rel="noreferrer"
                 role="button"
                 aria-expanded="false"
                 aria-controls="collapseExample">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MachineQuote;

//href="https://twitter.com/intent/tweet/?hashtag={ this.state.textQuote }"

//onClick={this.customNewQuote}