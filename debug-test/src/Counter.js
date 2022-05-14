import React from "react";

const audio = document.getElementById('beep');

class App extends React.Component {
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: 'Session',
    isPlaying: false
  }
  
  constructor(props) {
    super(props);
    this.loop = undefined;
  }
  
  componentWillUnmount() {
    clearInterval(this.loop);
  }
  
  handlePlayPause = () => {
    const { isPlaying } = this.state;
    
    if(isPlaying) {
      clearInterval(this.loop);
      this.setState({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });
      
      this.loop = setInterval(() => {
      	//Tous les state
        const { 
          clockCount, 
          currentTimer, 
          breakCount, 
          sessionCount
        } = this.state;
        
        if(clockCount === 0) {
          this.setState({
            currentTimer: (currentTimer === 'Session') ? 'Break' : 'Session', //Switch
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
    let minutes = Math.floor(count / 60); //1 à 25
    let seconds = count % 60;
    
    minutes = minutes < 10 ? ('0'+minutes) : minutes; //Ajoute un zéro str graphique !
    seconds = seconds < 10 ? ('0'+seconds) : seconds;
    
    return `${minutes}:${seconds}`;
  }
  
  handleLengthChange = (count, timerType) => {
    const { 
      sessionCount, 
      breakCount, 
      isPlaying, 
      currentTimer
    } = this.state;
    
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
        [`${timerType}Count`]: newCount // breakCount ou sessionCount
      });
          
      if(currentTimer.toLowerCase() === timerType) {
        this.setState({
          clockCount: newCount * 60
        })
      }
    }
  }
 

  
  render () {
    const { 
      breakCount,
      sessionCount,
      clockCount,
      currentTimer,
      isPlaying
    } = this.state;
    
    const breakProps = {
      title: 'Break',
      count: breakCount, //5
      handleDecrease: () => this.handleLengthChange(-1, 'break'), // -1
      handleIncrease: () => this.handleLengthChange(1, 'break')	// +1
    }
    
    const sessionProps = {
      title: 'Session',
      count: sessionCount, //25
      handleDecrease: () => this.handleLengthChange(-1, 'session'), // -1
      handleIncrease: () => this.handleLengthChange(1, 'session') // +1
    }
    
    return (
     <div>
      <div className="flex">
        <SetTimer {...breakProps} />
        <SetTimer {...sessionProps} />
      </div>
        
      <div className="clock-container">
        <h1 id="timer-label">{currentTimer}</h1> // currentTimer = "Session"
        <span id="time-left">{this.convertToTime(clockCount)}</span>
        
        <div className="flex">
          <button id="start_stop" onClick={this.handlePlayPause}>
            {isPlaying ? 'pause' : 'play'}
          </button>
        <button id="reset" onClick={this.handleReset}>
          sync
        </button>
       </div>
      </div>
    </div>);
  } 
}

const SetTimer = (props) => {
  const id = props.title.toLowerCase();
  
  return (
  <div className="timer-container">
    <h2 id={`${id}-label`}>		// marque la longueur de title "Break" ou "Session"
      {props.title} Length
    </h2>
    <div className="flex actions-wrapper">
      <button id={`${id}-decrement`} onClick={props.handleDecrease}>
        moins-
      </button>
      
      <span id={`${id}-length`}>{props.count}</span>
      
      <button id={`${id}-increment`} onClick={props.handleIncrease}>
        plus+
      </button>
    </div>
  </div>
  );
}

export default App;
