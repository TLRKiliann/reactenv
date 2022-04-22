import React from 'react';
import "./App.css";
import $ from "jquery";


export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timerLabel: "Session",
      breakCount: 5,
      sessionCount: 25,
      sessionMin: 25,
      sessionSec: 0,
      play: false,
      intervalID: "",
      changeCounter: false
    };
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.reset = this.reset.bind(this);
    this.changeState = this.changeState.bind(this);
    this.beginCountDown = this.beginCountDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.changeCounter = this.changeCounter.bind(this);
  }

  
  incrementSession() {
    let increment = this.state.sessionCount + 1 > 60 ? 60 : this.state.sessionCount + 1;
    this.setState({
      sessionCount: increment, sessionMin: increment
    });
  }

  decrementSession() {
    let decrement = this.state.sessionCount - 1 < 1 ? 1 : this.state.sessionCount - 1;
    this.setState({
      sessionCount: decrement, sessionMin: decrement
    });
  }

  incrementBreak() {
    this.setState((state) => {
      return {breakCount: ((state.breakCount + 1 > 60) ? 60 : state.breakCount + 1)}
    });
  }

  decrementBreak() {
    this.setState((state) => {
      return {breakCount: ((state.breakCount - 1 < 1) ? 1 : state.breakCount - 1)}
    });
  }

  
  reset() {
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
    $(".timer-session-area").addClass("paused");
    $(".timer-session-area").removeClass("active");
    $(".timer-session-area").removeClass("break-time");
  }

  changeState() {
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
        $(".timer-session-area").addClass("active");
        $(".timer-session-area").removeClass("paused");
        $(".timer-session-area").removeClass("break-time");
      } else {
        $(".timer-session-area").addClass("break-time");
        $(".timer-session-area").removeClass("paused");
        $(".timer-session-area").removeClass("active"); 
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
      this.setState({
      sessionSec: sec, sessionMin: min, changeCounter: true
    });
    } else {
      this.setState({ sessionSec: sec, sessionMin: min }); // COUNTER
    }
    } else {
      this.playAlarm();
      this.changeCounter();
    }
  }

  beginCountDown() {
    var intervalID = setInterval (this.handleChange, 1000);  // handleChange appelé ici
    this.setState({ intervalID: intervalID }) // PLAY
  }

  stopCountDown() {
    clearInterval(this.state.intervalID);
    this.setState({ intervalID: "" }); // STOP
  }

  playAlarm() {
    let audio = document.getElementById("beep");
    audio.play();
  }

  changeCounter() {
    let breakCount = this.state.breakCount;
    let sessionCount = this.state.sessionCount;
    if (this.state.timerLabel === "Session") {
       this.setState({
      sessionSec: 0, sessionMin: breakCount, timerLabel: "Break", changeCounter: false
    });
      $(".timer-session-area").addClass("break-time");
      $(".timer-session-area").removeClass("active");
      $(".timer-session-area").removeClass("paused");
    } else {
       this.setState({
      sessionSec: 0, sessionMin: sessionCount, timerLabel: "Session", changeCounter: false
    });
      $(".timer-session-area").addClass("active");
      $(".timer-session-area").removeClass("paused");
      $(".timer-session-area").removeClass("break-time");
    }
  }

  render() {
    let min = this.state.sessionMin + "";
    let sec = this.state.sessionSec + "";
    if (min.length < 2) {
      min = "0" + min;
    }
    if (sec.length < 2) {
      sec = "0" + sec;
    }
    return(
      <div id="clock">
        <div className="control-area">
          <div className="control">
            <h2 id="break-label">Break Length</h2>

            <button className="control-button"
              id="break-decrement"
              title="decrement break"
              onClick={this.decrementBreak}>
              <i className="fa fa-solid fa-arrow-down"></i>
            </button>
            
            <span
              id="break-length"
              className="control-length">{this.state.breakCount}</span>
            
            <button className="control-button"
              id="break-increment"
              title="increment break"
              onClick={this.incrementBreak}>
              <i className="fa fa-solid fa-arrow-up"></i> 
            </button>
          
          </div>
          <div className="control">
            
            <h2 id="session-label">Session Length</h2>
          
            <button className="control-button"
              id="session-decrement"
              title="decrement session"
              onClick={this.decrementSession}>
              <i className="fa fa-solid fa-arrow-down"></i>
            </button>
          
            <span id="session-length" 
              className="control-length">{this.state.sessionCount}</span>
          
            <button className="control-button"
              id="session-increment"
              title="increment session"
              onClick={this.incrementSession}>
              <i className="fa fa-solid fa-arrow-up"></i>
            </button>
          
          </div>
        </div> 
        <div id="timer">
          
          <div className="timer-session-area paused">
            <h2 id="timer-label">{this.state.timerLabel}</h2>
            <p id="time-left">{min}:{sec}</p>
          </div>
          
          <div className="timer-control-area">

            <button id="start_stop"
              className="control-button"
              title="play/pause" 
              onClick={this.changeState}>
              <i className="fa fa-solid fa-play"></i>
              <i className="fa fa-solid fa-pause"></i>
            </button>
            
            <button id="reset"
              className="control-button"
              title="reset"
              onClick = {this.reset}>
              <i className="fa fa-solid fa-arrow-rotate-left"></i>
            </button>

          </div>
        </div>
        
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div> 
    );
  }
}

