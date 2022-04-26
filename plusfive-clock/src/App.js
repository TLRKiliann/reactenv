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
      breakLength: 5,
      sessionLength: 25,
      counterClock: 25*60,
      mainTitle: 'Session',
      isRunning: false,
      intervalID: undefined,
    };
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    
    this.handleReset = this.handleReset.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);

    this.formatMMSS = this.formatMMSS.bind(this);
  }

  playAudio = () => {
    $('#beep').trigger('load');
    $('#beep').trigger('play');
  }

  stopAudio = () => {
    $('#beep').trigger('pause');
    $('#beep').prop("currentTime", 0);
  }

  handlePlayPause = (e) => {
    let defineTargetID = e.target.id;
    let { isRunning } = this.state;
    if (isRunning === true && defineTargetID) {
      defineTargetID = "pause";
      this.setState({ isRunning: false });
      this.stopAudio();
      this.stopCountDown();
      //console.log(isRunning);
      //console.log(defineTargetID);
    } else {
      //clearInterval(this.state.intervalID);
      this.setState({ isRunning: true });
      defineTargetID = "play";
      //console.log(typeof(this.formatMMSS())); //funtion
      //console.log(this.state.counterClock);
      //console.log(this.formatMMSS());
      let intervalId = setInterval(() => {
        const { counterClock, sessionLength, breakLength, mainTitle } = this.state;
        if (this.formatMMSS() === '00:00') { //this.state.counterClock
          this.setState({
            mainTitle: (mainTitle === 'Session') ? 'Break' : 'Session',
            counterClock: (mainTitle === 'Session') ? (breakLength * 60) : (sessionLength * 60)
          });
          this.playAudio()
        } else {
          this.setState({ counterClock: counterClock - 1 });
        };
      }, 1000);
      this.setState({ intervalID: intervalId });
      //console.log("current intervalID", this.state.intervalID);
    }
  }

  handleReset = () => {
    this.stopCountDown();
    this.stopAudio('beep');
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      counterClock: 25*60,
      mainTitle: "Session",
      isRunning: false,
      intervalID: undefined
    });
    //console.log("reset", this.state.intervalID);
  };

  stopCountDown() {
    //console.log("before clearing", this.state.intervalID);
    clearInterval(this.state.intervalID);
    //console.log("after clearing", this.state.intervalID);
    //this.setState(state => ({ intervalID: state.intervalID }));
  }

  handleBreakDecrement = () => {
    const { breakLength, isRunning, mainTitle } = this.state;
    if (breakLength > 1) {
      if(!isRunning && mainTitle === 'Break') {
        this.setState({ breakLength: breakLength - 1,
          counterClock: (breakLength - 1) * 60
        });
      } else {
        this.setState({ breakLength: breakLength - 1,
        });
      }
    }
  } 

  handleBreakIncrement = () => {
    const { breakLength, isRunning, mainTitle } = this.state;
    if (breakLength < 60) {
      if(!isRunning && mainTitle === 'Break') {
        this.setState({ breakLength: breakLength + 1,
          counterClock: (breakLength + 1) * 60
        });
      } else {
        this.setState({ breakLength: breakLength + 1,
        });
      }
    }
  }

  handleSessionDecrement = () => {
    const { sessionLength, isRunning, mainTitle } = this.state;
    if (sessionLength > 1) {
      if(!isRunning && mainTitle === 'Session') {
        this.setState({ sessionLength: sessionLength - 1,
          counterClock: (sessionLength - 1) * 60
        });
      } else {
        this.setState({ sessionLength: sessionLength - 1,
        });
      }
    }
  }

  handleSessionIncrement = () => {
    const { sessionLength, isRunning, mainTitle } = this.state;
    if (sessionLength < 60) {
      if(!isRunning && mainTitle === 'Session') {
        this.setState({ sessionLength: sessionLength + 1,
          counterClock: (sessionLength + 1) * 60
        });
      } else {
        this.setState({ sessionLength: sessionLength + 1,
        });
      }
    }
  }

  formatMMSS = (counterClock) => {
    let minutes = Math.floor(this.state.counterClock / 60);
    let seconds = this.state.counterClock % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
  }
  render () {
    const { breakLength, sessionLength, mainTitle, counterClock, isRunning } = this.state;

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
                onClick={() => this.handleBreakDecrement(breakLength)}
              />
              
              <span id="break-length">{breakLength}</span>

              <FaRegArrowAltCircleUp
                id="break-increment"
                size={28}
                onClick={() => this.handleBreakIncrement(breakLength)}
              />

            </div>
          </div>

          <div className="timer-container">
            <h2 id="session-label">
              Session Length
            </h2>

            <div className="flex actions-wrapper">

              <FaRegArrowAltCircleDown
                id="session-decrement"
                size={28}
                onClick={() => this.handleSessionDecrement(sessionLength)}
              />
              
              <h3 id="session-length">{sessionLength}</h3>

              <FaRegArrowAltCircleUp
                id="session-increment"
                size={28}
                onClick={() => this.handleSessionIncrement(sessionLength)}
              />

            </div>
          </div>
        </div>
          
        <div className="clock-container">
          <div id="timer">
            <h1 id="timer-title">25+5 Clock</h1>

            <div className="timer-session-area">
              <h2 id="timer-label">{mainTitle}</h2>
              <p id="time-left">{this.formatMMSS(counterClock)}</p>
            </div>

            <div className="flex--bottom">

              <button id="start_stop" title="play/pause" onClick={(e) => this.handlePlayPause(e)}>
                {isRunning ? <BiPause id="pause" size={28}/> :
                <FaPlayCircle id="play" size={28} />}
              </button>

              <button id="reset" onClick={this.handleReset}>
                <BiReset className="sync" size={28} />
              </button>

              <audio
                id="beep"
                type="audio/wav"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
              >
              </audio>
         
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

//ReactDOM.render(<App />, document.getElementById('app'));