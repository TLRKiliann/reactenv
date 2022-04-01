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
        "lightcoral", "lightpink"]
    };
    this.jQuerycode = this.jQuerycode.bind(this);
    //this.customNewQuote.bind(this) => already run with button
  }

  componentDidMount() {
    const rsltCatch = this;
    fetch('https://type.fit/api/quotes')
      .then(response => {
        return response.json();
      })
      .then(function(data) {
        const index = Math.floor((Math.random() * data.length) + 1);
        rsltCatch.setState({
          textQuote: data[index].text,
          authorQuote: data[index].author
        });
      });
  }

  jQuerycode = () => {
    const {colorText, colorQuote, colorsBody} = this.state;
    //console.log('1colorsBody : ', this.state.colorsBody)
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
    //console.log('3colorsBody : ', this.state.colorsBody)
  };

  customNewQuote() {
    this.jQuerycode()
  }

  render() {
    return (
      <div className="machine--class">

        <div className='turn--class'>
          <div id='quote-box'>
            <div id='text'>{this.state.textQuote}</div>
            <div id='author'>{this.state.authorQuote}</div>
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

export default MachineQuote;

//href="https://twitter.com/intent/tweet/?hashtag={ this.state.textQuote }"

//onClick={this.customNewQuote}