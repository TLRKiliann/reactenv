import React from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
  FaPlayCircle, FaReact } from "react-icons/fa";
import { BiReset, BiPause } from "react-icons/bi";
import "./App.css";
import "./music/beep.mp3";

const audio = document.getElementById('beep');
//const audio = "./music/beep.mp3";
/*const audio = (id) => {
  document.getElementById(id).play()
}*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false
    };
    this.loop = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  handlePlayPause = () => {
    const { isPlaying } = this.state;
    
    if (isPlaying) {
      clearInterval(this.loop);
      this.setState({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });
      
      this.loop = setInterval(() => {
        const { clockCount, currentTimer, breakCount, sessionCount } = this.state;
        if(clockCount === 0) {
          this.setState({
            currentTimer: (currentTimer === 'Session') ? 'Break' : 'Session',
            clockCount: (currentTimer === 'Session') ? (breakCount * 60) : (sessionCount * 60)
          });
          audio.play();
        } else {
          this.setState({
            clockCount: clockCount - 1
          });
        }
      }, 1000);
    }
  }
  
  handleReset = () => {
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false
    });
    clearInterval(this.loop);  
    audio.pause();
    audio.currentTime = 0;
  }
  
  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
  }
  
  handleTimeChange = (count, timerType) => {
    const { sessionCount, breakCount, isPlaying, currentTimer} = this.state;

    let newCount;
    
    if(timerType === 'session') {
      newCount = sessionCount + count;
    } else {
      newCount = breakCount + count;
    }
    
    // case Session: sessionCount:...
    // case Break: breakCount:...
    
    if(newCount > 0 && newCount < 61 && !isPlaying)  {
      this.setState({
        [`${timerType}Count`]: newCount
      });
          
      if(currentTimer.toLowerCase() === timerType) {
        this.setState({
          clockCount: newCount * 60
        })
      }
    }
  }

  render () {
    const { breakCount, sessionCount, clockCount, currentTimer, isPlaying } = this.state;

    const breakOfProps = {
      title: 'Break',
      count: breakCount,
      handleDecrease: () => this.handleTimeChange(-1, 'break'),
      handleIncrease: () => this.handleTimeChange(1, 'break')
    }
    
    const sessionOfProps = {
      title: 'Session',
      count: sessionCount,
      handleDecrease: () => this.handleTimeChange(-1, 'session'),
      handleIncrease: () => this.handleTimeChange(1, 'session')
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
          <h1 id="timer-label">{currentTimer}</h1>
          <span id="time-left">{this.convertToTime(clockCount)}</span>
          
          <div className="flex--bottom">
            <button id="start_stop" onClick={this.handlePlayPause}>
              {isPlaying ? <BiPause id="bi-pause" size={28}/> : <FaPlayCircle id="fa-play" size={28} />}
              
            </button>
            <button id="reset" onClick={this.handleReset}>
              <BiReset className="fas fa-sync" size={28} />
            </button>
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
        <FaRegArrowAltCircleDown id={`${id}-decrement`} size={28} onClick={props.handleDecrease} />
        
        <span id={`${id}-length`}>{props.count}</span>

        <FaRegArrowAltCircleUp id={`${id}-increment`} size={28} onClick={props.handleIncrease} />
      </div>
          <audio
            id="beep"
            preload="auto"
            src="./music/beep.mp3"
          ></audio>
    </div>
  );
}


//   handleBreakDecrease = () => {
//     const { breakCount, isPlaying, currentTimer } = this.state;
    
//     if(breakCount > 1)  {
//       if(!isPlaying && currentTimer === 'Break') {
//         this.setState({
//           breakCount: breakCount - 1,
//           clockCount: (breakCount - 1) * 60
//         });
//       } else {
//         this.setState({
//           breakCount: breakCount - 1,
//         });
//       }
//     }
//   } 
  
//   handleBreakIncrease = () => {
//     const { breakCount, isPlaying, currentTimer } = this.state;
    
//     if (breakCount < 60) {
//       if(!isPlaying && currentTimer === 'Break') {
//         this.setState({
//           breakCount: breakCount + 1,
//           clockCount: (breakCount + 1) * 60
//         });
//       } else {
//         this.setState({
//           breakCount: breakCount + 1,
//         });
//       }
//     }
//   }

  
//   handleSessionDecrease = () => {
//     const { sessionCount, isPlaying, currentTimer } = this.state;
    
//     if  (sessionCount > 1) {
//      if(!isPlaying && currentTimer === 'Session') {
//         this.setState({
//           sessionCount: sessionCount - 1,
//           clockCount: (sessionCount - 1) * 60
//         });
//       } else {
//         this.setState({
//           sessionCount: sessionCount - 1,
//         });
//       }
//     }
//   }
  
//   handleSessionIncrease = () => {
//     const { sessionCount, isPlaying, currentTimer } = this.state;
    
//     if (sessionCount < 60) {
//       if(!isPlaying && currentTimer === 'Session') {
//        this.setState({
//          sessionCount: sessionCount + 1,
//          clockCount: (sessionCount + 1) * 60
//         });
//       } else {
//         this.setState({
//           sessionCount: sessionCount + 1,
//         });
//       }
//     }
//   }