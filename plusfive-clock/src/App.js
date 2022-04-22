import React from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
  FaPlayCircle, FaReact } from "react-icons/fa";
import { BiReset, BiPause } from "react-icons/bi";
import "./App.css";
import $ from "jquery";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakCount: 5,
      sessionCount: 25,
      sessionMin: 25,
      sessionSec: 0,
      timerLabel: 'Session',
      play: false,
      intervalID: '',
      changeCounter: false
    };
    this.handleDecrementBreak = this.handleDecrementBreak.bind(this);
    this.handleIncrementBreak = this.handleIncrementBreak.bind(this);
    this.handleDecrementSession = this.handleDecrementSession.bind(this);
    this.handleIncrementSession = this.handleIncrementSession.bind(this);
    
    this.handleReset = this.handleReset.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);

    this.beginCountDown = this.beginCountDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);

    this.changeCounter = this.changeCounter.bind(this);
  }
  
  handleIncrementSession() {
    let increment = this.state.sessionCount + 1 > 60 ? 60 : this.state.sessionCount + 1;
    this.setState({ sessionCount: increment, sessionMin: increment
    });
  }

  handleDecrementSession() {
    let decrement = this.state.sessionCount - 1 < 1 ? 1 : this.state.sessionCount - 1;
    this.setState({ sessionCount: decrement, sessionMin: decrement
    });
  }

  handleIncrementBreak() {
    this.setState((state) => {
      return {breakCount: ((state.breakCount + 1 > 60) ? 60 : state.breakCount + 1)}
    });
  }

  handleDecrementBreak() {
    this.setState((state) => {
      return {breakCount: ((state.breakCount - 1 < 1) ? 1 : state.breakCount - 1)}
    });
  }

  handleReset() {
    if (this.state.intervalID !== "") { // intervalID
      this.stopCountDown();
    }
    let audio = document.getElementById("beep");
    audio.pause();
    audio.load();

    this.setState({
      timerLabel: "Session",
      breakCount: 5,
      sessionCount: 25,
      sessionMin: 25,
      sessionSec: 0,
      play: false,
      intervalID: ""
    });
    this.setState({ play: false });
    /*$(".timer-session-area").addClass("paused");
    $(".timer-session-area").removeClass("active");
    $(".timer-session-area").removeClass("break-time");*/
  }


  handlePlayPause() {
    if (this.state.play) { // Si PAUSE
      this.setState({ play: false });
      $(".timer-session-area").addClass("paused");
      $(".timer-session-area").removeClass("active");
      $(".timer-session-area").removeClass("break-time");
      if (this.state.intervalID !== "") {
        this.stopCountDown();  // Delete intervalID
      }
    } else {
      this.setState({ play: true }); // Si PLAY
      if (this.state.timerLabel === "Session") {
        //this.state.play = true;
        $(".timer-session-area").addClass("active");
        $(".timer-session-area").removeClass("paused");
        $(".timer-session-area").removeClass("break-time");
      } else {
        this.setState({ play: false });
        }
      if (this.state.intervalID === "")
        this.beginCountDown();  // Ajout intervalID
    }
  }

  handleChange() {
    let sec = this.state.sessionSec - 1 < 0 ? 59 : this.state.sessionSec - 1;
    let min = this.state.sessionSec - 1 < 0 ? this.state.sessionMin - 1 : this.state.sessionMin;
    if(!this.state.changeCounter) {
      if (min === 0 && sec === 0) {
      this.setState({ sessionSec: sec, sessionMin: min, changeCounter: true
    });
    } else {
      this.setState({ sessionSec: sec, sessionMin: min });
    }
    } else {
      this.playAudio();
      this.changeCounter();
    }
  }

  beginCountDown() {
    let intervalID = setInterval (this.handleChange, 1000);  // handleChange appelé ici
    this.setState({ intervalID: intervalID }) // PLAY
  }

  stopCountDown() {
    clearInterval(this.state.intervalID);
    this.setState({ intervalID: "" }); // STOP
  }

  playAudio() {
    let audio = document.getElementById("beep");
    audio.play();
  }

  changeCounter() {
    let breakCount = this.state.breakCount;
    let sessionCount = this.state.sessionCount;
    if (this.state.timerLabel === "Session") {
       this.setState({
        sessionSec: 0, 
        sessionMin: breakCount, 
        timerLabel: "Break",
        changeCounter: false
    });
      this.setState({ play: false });
      /*$(".timer-session-area").addClass("break-time");
      $(".timer-session-area").removeClass("active");
      $(".timer-session-area").removeClass("paused");*/
    } else {
       this.setState({
        sessionSec: 0, 
        sessionMin: sessionCount, 
        timerLabel: "Session", 
        changeCounter: false
    });
      this.setState({ play: true });
      /*$(".timer-session-area").addClass("active");
      $(".timer-session-area").removeClass("paused");
      $(".timer-session-area").removeClass("break-time");*/
    }
  }

  render () {
    let minutes = this.state.sessionMin + "";
    let seconds = this.state.sessionSec + "";
    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }
    return (
      <div>
        <div className="react--div">
          <FaReact className="icon-react" size={112} />
        </div>
        <div className="flex">

          <div className="timer-container">
            <h2 id="break-label">
              Break Length
            </h2>

            <div className="flex actions-wrapper">

              <FaRegArrowAltCircleDown
                id="break-decrement"
                size={28}
                onClick={this.handleDecrementBreak}
              />
              
              <span id="break-length">{this.state.breakCount}</span>

              <FaRegArrowAltCircleUp
                id="break-increment"
                size={28}
                onClick={this.handleIncrementBreak}
              />

            </div>
          </div>

          <div className="timer-container">
            <h2 id="Session-label">
              Session Length
            </h2>

            <div className="flex actions-wrapper">

              <FaRegArrowAltCircleDown
                id="Session-decrement"
                size={28}
                onClick={this.handleDecrementSession}
              />
              
              <h3 id="Session-length">{this.state.sessionCount}</h3>

              <FaRegArrowAltCircleUp
                id="Session-increment"
                size={28}
                onClick={this.handleIncrementSession}
              />

            </div>
          </div>
        </div>
          
        <div className="clock-container">
          <div id="timer">
            <h1 id="timer-title">25+5 Clock</h1>

            <div className="timer-session-area paused">
              <h2 id="timer-label">{this.state.timerLabel}</h2>
              <p id="time-left">{minutes}:{seconds}</p>
            </div>

            <div className="flex--bottom">

              <button id="start_stop" title="play/pause" onClick={this.handlePlayPause}>
                {this.state.play ? <BiPause id="bi-pause" size={28}/> :
                  <FaPlayCircle id="fa-play" size={28} />}
              </button>

              <button id="reset" onClick={this.handleReset}>
                <BiReset className="fas fa-sync" size={28} />
              </button>

              <audio
                id="beep"
                type="audio/wav"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
              ></audio>
         
            </div>
          </div>
        </div>
      </div>
    );
  } 
}


//ReactDOM.render(<App />, document.getElementById('app'));