import React from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
  FaPlayCircle, FaReact } from "react-icons/fa";
import { BiReset, BiPause } from "react-icons/bi";
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakCount: 5,
      sessionCount: 25,
      clockCount: 1500,
      mainTitle: 'session',
      isRunning: false,
      audio: document.getElementById('beep')
    };
    this.toSetInterVal = undefined;
  }

  handlePlayPause = () => {
    const { isRunning } = this.state;

    if (!isRunning) {
      this.setState(prevState => ({isRunning: !prevState.isRunning}));
      this.startCountDown();
    } else {
      this.setState(prevState => ({isRunning: !prevState.isRunning}));

      clearInterval(this.toSetInterVal);
    }
  }

  changeTimer() {
    this.setState(({ timerType, breakCount, sessionCount }) => {
      if (timerType === 'session') {
        return { clockCount: breakCount * 60, timerType: 'break' };
      } else {
        return { clockCount: sessionCount * 60, timerType: 'session' };
      }
    });
    clearInterval(this.clockCount);
    this.startCountDown();
  }

  playAudio = (id) => {
    document.getElementById('beep').play();
  }

  timeCheck() {
    const { clockCount } = this.state;
    if (clockCount < 0) {
      this.playAudio('beep');
      this.changeTimer();
    }
  }

  startCountDown() {
    this.toSetInterVal = setInterval(() => {
      this.setState(prevState => ({ clockCount: prevState.clockCount - 1 }));
      this.timeCheck();
    }, 1000); // 0 -1 toute les secondes
  }

  //To format timer-left
  mmssFormater = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return minutes + ':' + seconds;
  }
  
  handleTimeChange = (count, timerType) => {
    const { sessionCount, breakCount, isRunning, mainTitle } = this.state;
    let newCount;
    if (timerType === 'session') {
      newCount = sessionCount + count; //counter
    } else {
      newCount = breakCount + count;
    }
    if (newCount > 0 && newCount < 61 && !isRunning)  {
      this.setState({ [`${timerType}Count`]: newCount }); //sessionCount inc or dec   
      if (mainTitle.toLowerCase() === timerType) { //session = session
        this.setState({ clockCount: newCount * 60 }) //defined clcokCount + or - 25
      }
    }
  }

  stopAudio = (id) => {
    let newaudio = document.getElementById(id);
    newaudio.pause();
    newaudio.load();
    newaudio.currentTime = 0;
    //console.log(newaudio.currentTime);
  }

  handleReset = () => {
    clearInterval(this.toSetInterVal);
    this.stopAudio("beep");
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 1500,
      mainTitle: 'session',
      isRunning: false,
      audio: document.getElementById('beep')
    });
  }

  componentDidMount() {
    this.toSetInterVal = undefined;
  }

  render () {
    const { breakCount, sessionCount, clockCount, mainTitle, isRunning } = this.state;
    const breakOfProps = {
      title: 'Break',
      count: breakCount,
      handleDecrement: () => this.handleTimeChange(-1, 'break'),
      handleIncrement: () => this.handleTimeChange(1, 'break')
    }
    const sessionOfProps = {
      title: 'Session',
      count: sessionCount,
      handleDecrement: () => this.handleTimeChange(-1, 'session'),
      handleIncrement: () => this.handleTimeChange(1, 'session')
    }
    return (
       <div>
        <div className="react--div">
          <FaReact className="icon-react" size={112} />
        </div>
        <div className="flex">
          <SetTimer {...breakOfProps} />
          <SetTimer {...sessionOfProps} />
        </div>
          
        <div className="clock-container">
          <h1 id="timer-label">{mainTitle}</h1>
          <span id="time-left">{this.mmssFormater(clockCount)}</span>
          
          <div className="flex--bottom">

            <button id="start_stop" onClick={this.handlePlayPause}>
              {isRunning ? <BiPause id="bi-pause" size={28}/> :
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
    );
  } 
}

const SetTimer = (props) => {
  const id = props.title.toLowerCase();
  
  return (
    <div className="timer-container">
      <h2 id={`${id}-label`}>
        {props.title} Length
      </h2>

      <div className="flex actions-wrapper">

        <FaRegArrowAltCircleDown
          id={`${id}-decrement`}
          size={28}
          onClick={props.handleDecrement}
        />
        
        <span id={`${id}-length`}>{props.count}</span>

        <FaRegArrowAltCircleUp
          id={`${id}-increment`}
          size={28}
          onClick={props.handleIncrement}
        />

      </div>
    </div>
  );
}
