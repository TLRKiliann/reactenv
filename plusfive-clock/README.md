# npm start

# 25+5 clock

import React from "https://cdn.skypack.dev/react@17.0.1";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
  FaPlayCircle, FaReact } from "https://cdn.skypack.dev/react-icons@4.3.1/fa";
import { BiReset, BiPause } from "https://cdn.skypack.dev/react-icons@4.3.1/bi";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakCount: 5,
      sessionCount: 25,
      clockCount: 1500,
      mainTitle: 'Session',
      isRunning: false,
      audio: document.getElementById('beep')
    };
    this.toSetInterVal = undefined;
  }
  
  playAudio = (id) => {
    document.getElementById('beep').play();
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
          sessionCount, 
          breakCount, 
          mainTitle
        } = this.state;
        
        if (timerType === 'session') {
          this.setState({
            mainTitle: (mainTitle === 'Session') ? 'Break' : 'Session',
            clockCount: (mainTitle === 'Session') ? (breakCount * 60) : (sessionCount * 60),
            audio: this.playAudio('beep')
          });
        } else {
          this.setState({ clockCount: clockCount - 1 });
        }
      }, 1000);
    }
 }

  
  /*handlePlayPause() {
    this.setState(({ timerType, breakCount, sessionCount }) => {
      if (timerType === 'session') {
        return { clockCount: breakCount * 60, timerType: 'break' };
      } else {
        return { clockCount: sessionCount * 60, timerType: 'session' };
      }
    });
    clearInterval(this.clockCount);
  }*/


  timeCheck() {
    const { clockCount } = this.state;
    if (clockCount < 0) {
      //this.changeTimer();
    }
  }


  //To format timer-left
  mmssFormater = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
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
      this.setState({ [`${timerType}Count`]: newCount });  
      if (mainTitle.toLowerCase() === timerType) {
        this.setState({ clockCount: newCount * 60 })
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
      breakCount: 5,
      sessionCount: 25,
      clockCount: 1500,
      mainTitle: 'Session',
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

ReactDOM.render(<App />, document.getElementById('app'));