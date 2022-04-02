import React from 'react';
import $ from 'jquery';
import { FaTwitter } from "react-icons/fa";
import { AiOutlineSync } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import './styles.scss';
import './App.css';


class MachineQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textQuote: '',
      authorQuote: '',
      colorText: ['lightsalmon', 'white', 'cyan', 'yellow'],
      colorQuote: ["grey", "steelblue", "orange", "green", "magenta", "purple"],
      colorsBody: ["lightgrey", "lightblue", "lightsalmon", "lightgreen",
        "lightcoral", "lightpink"],
      isLoaded: false,
      tweetUrl: "https://twitter.com/intent/tweet/?text="
    };
    this.jQuerycode = this.jQuerycode.bind(this);
    //this.customNewQuote.bind(this) => already run with button
  }

  componentDidMount() {
    console.log('Mount_1 : ', this.state.isLoaded)
    //document.body.style.backgroundColor = 'lightpink';
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
          authorQuote: data[index].author,
          tweetUrl: "https://twitter.com/intent/tweet/?text=" + data[index].text.replace(/ /g, "+")
        });
      });
  }

  componentWillUnmount() {
    this.setState({isLoaded: false});
    console.log('Unmount (once time): ', this.state.isLoaded)
  }

  jQuerycode = () => {
    const { colorText, colorQuote, colorsBody } = this.state;
    const spectralColor = (colorQuote[Math.floor((Math.random() * colorQuote.length))]);
    const changeBodyCol = (colorsBody[Math.floor((Math.random() * colorsBody.length))]);
    const spectralText = (colorText[Math.floor((Math.random() * colorText.length))]);

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
              <div id='text'>
                <ImQuotesLeft />
                  &nbsp;{textQuote}&nbsp;
                <ImQuotesRight />
              </div>
              <div 
                id='author'>{authorQuote}>
              </div>

              <div className='btn--class'>
                <button 
                  id='new-quote'
                  onClick={this.customNewQuote.bind(this)}
                  className='btn btn-primary mb1 bg-blue'>
                  <AiOutlineSync id='synchro-quote' />
                    &nbsp;New Quote
                </button>
              
                <a id="tweet-quote"
                   data-bs-toggle="collapse"
                   href={ this.state.tweetUrl }
                   target="_blank"
                   rel="noopener noreferrer"
                   role="button"
                   aria-expanded="false"
                   aria-controls="collapseExample"
                   className="btn btn-primary mb1 bg-blue">
                  <FaTwitter id='titi-el'/>
                  &nbsp;Tweet Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MachineQuote;

//rel="noopener noreferrer"
//onClick={this.customNewQuote}