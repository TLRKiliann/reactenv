class Clock extends React.Component {
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25*60,
    currentTimer: "Session",
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
    const {isPlaying} = this.state;

    if (isPlaying === true) {
      clearInterval(this.loop);
      this.setState({ isPlaying: false })
    } else {
      this.setState({ isPlaying: true })

      this.loop = setInterval(() => {

        const { 
          clockCount, 
          currentTimer, 
          breakCount, 
          sessionCount
        } = this.state;

        if (clockCount === 0) {
          this.setState({
            currentTimer: (currentTimer === "Session") ? "Break" : "Session",
            clockCount: (currentTimer === "Session") ? (breakCount * 60) : (sessionCount * 60)
          });
          audio.play()
        } else {
          this.setState({clockCount: clockCount - 1});
        }
      }, 1000)
    }
  }

  handleReset = () => {
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25*60,
      currentTimer: "Session",
      isPlaying: false
    });
    clearInterval(this.loop);
    
    audio.pause();
    audio.currentTime = 0;
  }

  toConvertClock = (count) => {
    const minutes = Math.floor(count / 60);
    const seconds = minutes % 60;

    minutes = minutes < 10 ? ('0'+minutes) : minutes
    seconds = seconds < 10 ? ('0'+seconds) : seconds
    return `${minutes}:${seconds}`
  }

  handleChangeLength = (count, timerType) => {
    const = {
      breakCount,
      sessionCount,
      clockCount,
      currentTimer,
      isPlaying
     } = this.state;

    let newCounter;
    
    if (timerType === "session") {
      newCounter = sessionCount + count;
    } else {
      newCounter = breakCount + count;
    }
    
    if (newCounter > 0 && newCounter < 61 && !isPlaying) {
      this.setState({`${[timerType]}Count`] : newCount})

      if (currentTimer.toLowerCase() === timerType) {
        this.setState({clockCount: newCounter * 60})
      }
    }
  }


  render() {
    const {
      breakCount,
      sessionCount,
      clockCount,
      currentTimer,
      isPlaying:
    }

    const breakProps = {
      title: "Break",
      count: breakCount,
      handleIncrease: () => {handleChangeLength(1, "break")},
      handleDecrement: () => {handleChangeLength(-1, "break")}
    }

    const sessionProps = {
      title: "Session",
      count: sessionCount,
      handleIncrease: () => {handleChangeLength(1, "session")},
      handleDecrement: () => {handleChangeLength(-1, "session")}
    }

    return (
      <div>
        <SetTimer {...breakCount} />
        <SetTimer {...sessionProps} />
        <div>

          <h1>{currentTimer}</h1>
          <div id="hh" onChange={this.toConvertClock(clockCount)}></div>

          <div id="start_stop" onClick={this.handlePlayPause}>
            {isPlaying ? "Play" : "Pause"}
          </div>

          <div id="reset" onClick={this.handleReset}>
          </div>

        </div>
      </div>
    );
  }
};

const SetTimer = (props) => {
  const id = props.title.toLowerCase();

  return (
    <div>
      <div id={props.title}>
        {props.title} Length
      </div>
      <button id={`${id}-increment` onClick={props.handleIncrease}}>
        plus
      </button>

      <span id={`${id}-length`}>{props.count}</span>
      
      <button id={`${id}-decrement`} onClick={props.handleDecrease}>
        moins
      </button>
    </div>
  );
}