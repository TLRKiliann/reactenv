import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      activity: 'Session',
      current: 1500,
      timerOn: false
    };
    this.updateElement = this.updateElement.bind(this);
    this.updateElementTimeLeft = this.updateElementTimeLeft.bind(this);

    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);

    //this.handleReset = this.handleReset.bind(this);

    this.handleBreakInc = this.handleBreakInc.bind(this);
    this.handleBreakDec = this.handleBreakDec.bind(this);
    this.handleSessInc = this.handleSessInc.bind(this);
    this.handleSessDec = this.handleSessDec.bind(this);
    //this.handleStarStop = this.handleStarStop.bind(this);
    //this.Buttons = this.Buttons.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timer = this.timer.bind(this);
  };

  updateElement = (element, str) => {
    document.getElementById(element).innerHTML = str
  }

  updateElementTimeLeft = () => {
    this.setState(state => ({timeLeft: `${
      ('0' + state.minutes).slice(-2)}:${
        ('0' + state.seconds).slice(-2)}`
    }))
    this.updateElement("time-left", this.state.timeLeft)
  }

  playAudio = (id) => {
    document.getElementById(id).play()
  };

  stopAudio = (id) => {
    let audio = document.getElementById(id)
    audio.pause()
    audio.currentTime = 0
  };

  handleBreakInc() {
    if (this.state.breakLength === this.state.MAX_LENGTH) { 
      this.setState(state => ({breakLength: state.breakLength += 1}));
      return;
    }
    if (this.state.timerLabel === 'Break') {
      this.setState(state => ({minutes: state.breakLength, seconds: 0}));
    }
    this.updateElement('break-length', this.state.breakLength)
  };

  handleBreakDec() {
    if (this.state.breakLength === this.state.MIN_LENGTH) { 
      this.setState(state => ({breakLength: state.breakLength -= 1}));
      return;
    }
    if (this.state.timerLabel === 'Break') {
      this.setState(state => ({minutes: state.breakLength, seconds: 0}));
    }
    this.updateElement('break-length', this.state.breakLength)
  };

  handleSessInc() {
    if (this.state.sessionLength === this.state.MAX_LENGTH) {
      this.setState(state => ({sessionLength: state.sessionLength += 1}));
      return;
    } 
    if (this.state.timerLabel === 'Session') {
      this.setState(state => ({minutes: state.sessionLength, seconds: 0}));
    }
    this.updateElement('session-length', this.state.sessionLength)
  };

  handleSessDec() {
    if (this.state.sessionLength === this.state.MIN_LENGTH) {
      this.setState(state => ({sessionLength: state.sessionLength -= 1}));
      return;
    } 
    if (this.state.timerLabel === 'Session') {
      this.setState(state => ({minutes: state.sessionLength, seconds: 0}));
    }
    this.updateElement('session-length', this.state.sessionLength)
  };


  timer = () => {
    return setInterval(() => {
      if (this.state.timeLeft === '00:00') {
        this.playAudio('beep')
        if (this.state.timerLabel === 'Session') {
          this.setState(state => {
            return {
              minutes: state.breakLength,
              timerLabel: "Beak"
            }
          })
          //this.state.minutes = this.state.breakLength
          //this.state.timerLabel = 'Break'
        } else if (this.state.timerLabel === 'Break') {
          this.setState(state => ({
            minutes: state.sessionLength,
            timerLabel: "Session"
          }))
          //this.state.minutes = this.state.sessionLength
          //this.state.timerLabel = 'Session'
        }
        this.setState({seconds: 0}) 
        //this.state.seconds = 0
        this.updateElement('timer-label', this.state.timerLabel)
      } else if (this.state.seconds === 0) {
        this.setState(state => ({
          minutes: state.minutes -= 1,
          seconds: 59
        }))
        //this.state.minutes --
        //this.state.seconds = 59
      } else {
        this.setState(state => ({seconds: state.seconds -= 1}))
        //this.state.seconds --
      }
      this.updateElementTimeLeft()
    }, 1000)
  }

  /*
  componentDidMount() {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });
  */


  handleChange = (e) => {
    const id = e.target.id;
    console.log(e.target.id);

    if (id === 'start_stop') {
      this.setState(state => ({status: state.status === 'start' ? 'pause' : 'start'}))
      //this.state.status = this.state.status === 'start' ? 'pause' : 'start'
      if (this.state.status === 'start') {
        this.setState({currInterval: this.timer})
        //this.state.currInterval = this.timer()

        //this.updateElement('start_stop', buttons.pause)
      } else if (this.state.status === 'pause') {
        clearInterval(this.state.currInterval)
        //this.updateElement('start_stop', button.start_stop)
      }
    } else if (id === 'reset') {
      clearInterval(this.state.currInterval)
      this.setState(state => {
        return {
        status: 'reset',
        timerLabel: 'Session',
        breakLength: 5,
        sessionLength: 25,
        minutes: this.state.sessionLength,
        seconds: 0,

      }})
      /*this.state.status = 'reset'
      this.state.timerLabel = 'Session'
      this.state.breakLength = 5
      this.state.sessionLength = 25
      this.state.minutes = this.state.sessionLength
      this.state.seconds = 0*/
      this.updateElementTimeLeft()
      this.updateElement('break-length', this.state.breakLength)
      this.updateElement('session-length', this.state.sessionLength)
      this.updateElement('timer-label', this.state.timerLabel)
      this.stopAudio('beep')
    }

    if (this.state.status === 'start') { return }

    if (id === 'break-increment') {
      this.handleBreakInc()
    } else if (id === 'break-decrement') {
      this.handleBreakDec()
    } else if (id === 'session-increment') {
      this.handleSessInc()
    } else if (id === 'session-decrement') {
      this.handleSessDec()
    }
    this.updateElementTimeLeft()
  }


  //Click en fonction de l'id du btn !!! (à maîtriser!)
  /*
  Buttons = (props) => {
    return (
      <div className='inline'>
        {[...props.btns].map(id =>
          <button
            className='btn default'
            id={id}
            onClick={e => {this.handleChange(e)}}>
            {buttons[id]}
          </button>
        )}
      </div>
    )
  }*/

  render() {
    const {breakLength, sessionLength, timeLeft, status} = this.state;
    return (
      <div className="App">
        5 + 25 Clock !

        <div id="break-label">
          <p id='break-length'>Break Length : {breakLength}</p>
        </div>

        <button id="break-increment" onClick={(e) => this.handleBreakInc(e)}>
          break-increment +1
        </button>

        <button id="break-decrement" onClick={(e) => this.handleBreakDec(e)}>
          break-decrement -1
        </button>

        <div id="session-label">
          <p id="session-length">Session Length : {sessionLength}</p>
        </div>

        <div id="timer-label">
          Session ou ... session
        </div>

        <button id="session-increment" onClick={(e) => this.handleSessInc(e)}>
          session-increment +1
        </button>        

        <button id="session-decrement" onClick={(e) => this.handleSessDec(e)}>
          session-decrement -1
        </button>

        <div id="time-left">
          {timeLeft}
        </div>

        <button id="start_stop" onClick={(e) => this.handleChange(e)}>start - stop</button>
        <p>{status}</p>

        <button id="reset" onClick={(e) => this.handleChange(e)}>reset</button>
        <p>icon reset</p>

        <audio
          className='clip'
          id='beep'
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
          />
      </div>
    );
  }
};

export default App;
