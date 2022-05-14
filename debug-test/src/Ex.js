

class App extends React.Component {
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: 'Session',
    isPlaying: false
  }
  constructor(props){
  super(props);
  this.loop = undefined
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }


  convertToTime = (count) => {
    let minutes = Math.floor(count/60);
    let seconds = count % 60;

    minutes = minutes < 10 ? ('0'+minutes) : minutes
    seconds = seconds < 10 ? ('0'+seconds) : seconds

    return `${minutes}:${seconds}`
  }

  handleLengthChange = (count, timerType) => { // +1 ou -1 break session
    const {
      sessionCount,
      breakCount,
      isPlaying,
      currentTimer
    } = this.state;

    let newCount;
    
    if (timerType === "session") {
      newCount = sessionCount + count; // +-1 = -1 session (25)
    } else {
      newCount = breakCount + count; // +-1 = -1 break (5)
    }
    if (newCount > 0 && newCount < 61 && !isPlaying) {
      this.setState({[`${timerType}Count`]: newCount}); // breakCount ou sessionCount

      if (currentTimer.toLowerCase() === timerType) { // "break" ou "session"
        this.setState({clockCount: newCount * 60}) //1*60=60-1min 2*60=180-2min 3*60=180-3min
      }
    }
  }

  //premiers paramétrages
  render() {
    const {
      breakCount,
      sessionCount,
      clockCount,
      currentTimer,
      isPlaying} = this.state;

    const breakProps = {
      title: "Break",
      count: breakCount,
      handleDecrease: ()=>this.handleLengthChange(-1, "break"),//count et timerType
      handleIncrease: ()=>this.handleLengthChange(1, "break")//count et timerType
    }

    const sessionProps = {
      title: "Session",
      count: sessionCount,
      handleDecrease: ()=>this.handleLengthChange(-1, "session"),
      handleIncrease: ()=>this.handleLengthChange(1, "session")
    }

    return (
     <div>
      <div className="flex">
        <SetTimer {...breakProps} /> //list de breakProps
        <SetTimer {...sessionProps} /> //list de sessionProps
      </div>
        
      <div className="clock-container">
        <h1 id="timer-label">{currentTimer}</h1>
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
//2ème paramétrage
const SetTimer = (props) => {
  const id = props.title.toLowerCase(); //Soit break ou session pour "id"

  return (
    <div>

      <h2>{props.title} Length</h2>

      <button id={`${id}-decrement`} onClick={props.handleDecrease}>
       - moins -
      </button>
      
      <span id={`${id}-length`}>{props.count}</span>// Break ou Session Length
      
      <button id={`${id}-increment`} onClick={props.handleIncrease}>
        + plus +
      </button>

    </div>
  )
}
