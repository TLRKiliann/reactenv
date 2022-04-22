import React from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
  FaPlayCircle, FaReact } from "react-icons/fa";
import { BiReset, BiPause } from "react-icons/bi";
import "./App.css";
//import $ from "jquery";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      counterClock: 1500,
      mainTitle: 'Session',
      isRunning: false,
      //intervalID: '',
    };
    /*this.handleDecrementBreak = this.handleDecrementBreak.bind(this);
    this.handleIncrementBreak = this.handleIncrementBreak.bind(this);*/
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    
    this.handleReset = this.handleReset.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.changeCounter = this.changeCounter.bind(this);
  }
  
  increment = (numb, whichOne) => {
    const { breakLength, sessionLength, isRunning } = this.state;
    let count;
    if (count === 0 && !count && !isRunning) {
      if (whichOne === 'break') {
        if (breakLength < 60) {
          this.setState(state => ({numb: state.numb + 1}));
        }
      }
      else {
        if (sessionLength < 60) {
          this.setState(state => ({numb: state.numb + 1}));
          if (sessionLength < 9) {
            this.setState([`0${sessionLength+1}:00`]);
          }
          else {
            this.setState([`${sessionLength+1}:00`]);
          }    
        }
      }   
    }
  }

  // DECREASE TIMER LENGTH //
  decrement = (numb, whichOne) => {
    const { breakLength, sessionLength, isRunning } = this.state;
    let count;
    if (count === 0 && !count && !isRunning) {
      if (whichOne === 'break') {
        if (breakLength > 1){
          this.setState(state => ({numb: state.numb -1}));
        }
      }
      else {
        if (sessionLength > 1) {
          this.setState(state => ({numb: state.numb -1}));
          if (sessionLength < 11) {
            this.setState([`0${sessionLength-1}:00`]);
          }
          else {
            this.setState([`${sessionLength-1}:00`]);
          }
        }
      }
    }
  }
  
  stopAudio = (id) => {
    if (this.toSetInterVal) {
      let newaudio = document.getElementById(id);
      newaudio.pause();
      newaudio.currentTime = 0;
      //console.log(newaudio.currentTime); 
    }
  }

  handleReset = () => {
    clearInterval(this.toSetInterVal);
    this.stopAudio("beep");
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      clockCount: 1500,
      mainTitle: 'Session',
      isRunning: false,
    });
  }

  handlePlayPause = () => {
    const { isRunning } = this.state;
    if(isRunning) {
      clearInterval(this.toSetInterVal);
      this.setState({ isRunning: false });
    } else {
      this.setState({ isRunning: true });
      this.toSetInterVal = setInterval(() => {
        const { 
          clockCount, 
          sessionLength, 
          breakLength, 
          mainTitle
        } = this.state;
        
        if (timerType === 'session') {
          this.setState({
            mainTitle: (mainTitle === 'Session') ? 'Break' : 'Session',
            clockCount: (mainTitle === 'Session') ? (breakLength * 60) : (sessionLength * 60),
            audio: this.playAudio('beep')
          });
        } else {
          this.setState({ clockCount: clockCount - 1 });
        }
      }, 1000);
    }
  }

  handleTimeChange = (count, timerType) => {
    const { sessionLength, breakLength, isRunning, mainTitle } = this.state;
    let newCount;
    if (timerType === 'session') {
      newCount = sessionLength + count;
    } else {
      newCount = breakLength + count;
    }
    if (newCount > 0 && newCount < 61 && !isRunning) {
      this.setState({ [`${timerType}Count`]: newCount });  
      if (mainTitle.toLowerCase() === timerType) {
        this.setState({ clockCount: newCount * 60 })
      }
    }
  }

  playAudio() {
    let audio = document.getElementById("beep");
    audio.play();
  }

  changeCounter() {
    let breakLength = this.state.breakLength;
    let sessionLength = this.state.sessionLength;
    if (this.state.mainTitle === "Session") {
      this.setState({
        counterClock: 1500,
        mainTitle: "Break",
        isRunning: false
      });
      this.setState({ isRunning: false });
    } else {
      this.setState({
        counterClock: 1500,
        mainTitle: "Session", 
        isRunning: false
      });
      this.setState({ isRunning: true });
    }
  }

  formatMMSS(count) {    
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
  }

  render () {
    // render is usefull with multiple calls !
    const { breakLength, sessionLength } = this.state;
    /*const { breakLength, sessionLength, clockCount, mainTitle, isRunning } = this.state;
    const breakOfProps = {
      title: 'Break',
      count: breakLength,
      handleDecrement: () => this.handleTimeChange(-1, 'break'),
      handleIncrement: () => this.handleTimeChange(1, 'break')
    }
    const sessionOfProps = {
      title: 'Session',
      count: sessionLength,
      handleDecrement: () => this.handleTimeChange(-1, 'session'),
      handleIncrement: () => this.handleTimeChange(1, 'session')
    }*/
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
                onClick={() => this.decrement(breakLength, 'break')}
              />
              
              <span id="break-length">{this.state.breakLength}</span>

              <FaRegArrowAltCircleUp
                id="break-increment"
                size={28}
                onClick={() => this.increment(breakLength, 'break')}
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
                onClick={() => this.decrement(sessionLength, 'length')}
              />
              
              <h3 id="Session-length">{this.state.sessionLength}</h3>

              <FaRegArrowAltCircleUp
                id="Session-increment"
                size={28}
                onClick={() => this.increment(sessionLength, 'length')}
              />

            </div>
          </div>
        </div>
          
        <div className="clock-container">
          <div id="timer">
            <h1 id="timer-title">25+5 Clock</h1>

            <div className="timer-session-area paused">
              <h2 id="timer-label">{this.state.mainTitle}</h2>
              <p id="time-left">{this.formatMMSS(this.state.counterClock)}</p>
            </div>

            <div className="flex--bottom">

              <button id="start_stop" title="play/pause" onClick={this.handlePlayPause}>
                {this.state.isRunning ? <BiPause id="bi-pause" size={28}/> :
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