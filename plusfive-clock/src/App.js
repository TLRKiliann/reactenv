import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    const audio = "https://...";
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: "25:00",
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleSessInc = this.handleSessInc.bind(this);
    this.handleSessDec = this.handleSessDec.bind(this);
    this.handleStarStop = this.handleStarStop.bind(this);
  }

  handleInc() {
    this.setState(state => {breakLength: state.breakLength + 1})
  }

  handleDec() {
    this.setState(state => {breakLength: state.breakLength - 1})
  }

  handleSessInc() {
    this.setState(state => {sessionLength: state.sessionLength + 1});
  }

  handleSessDec() {
    this.setState(state => {sessionLength: state.sessionLength -1 });
  }

  handleReset() {
    this.setState(state => {
      return {
        breakLength : this.state.breakLength,
        sessionLength: this.state.sessionLength,
        timeLeft: this.state.timeLeft
      }
    });
  };

  handleStarStop() {
    //start and pause
    this.setState(state => {sessionLength: state.sessionLength});
  }

  render() {
    const {breakLength, sessionLength, timeLeft} = this.state;
    if (breakLength > 0 && sessionLength > 0 && breakLength <= 60 && sessionLength <= 60) {
      return tout le return ! non ???
    }
    return (
      <div className="App">
        Hello !



        <div id="break-label">
          <p id='break-length'>Break Length : {breakLength}</p>
        </div>

        <button id="break-increment" onClick={(e) => this.handleInc(e)}>
          break-increment +1
        </button>
        <button id="break-decrement" onClick={(e) => this.hadleDec(e)}>
          break-decrement -1
        </button>



        <div id="session-label">
          <p id="session-length">Session Length : {sessionLength}</p>
        </div>

        <div id="timer-label">
          Session ou {session} ???
        </div>
        <button id="session-increment" onClick={(e) => this.handleSessInc(e)}>
          session-increment +1
        </button>        
        <button id="session-decrement" onClick={(e) => this.handleSessDec(e)}>
          session-decrement -1
        </button>


        <div id="time-left">
          {timeLeft}  mm:ss  doit tjs être affiché ainsi.
        </div>


        <button id="start_stop" onClick={(e) => this.handleStarStop(e)}>start - stop</button>

        <button id="reset" onClick={(e) => this.handleReset(e)}>reset</button>

        <audio id='beep' src={this.audio}></audio> //déclenché lorsque 00:00 !

      </div>
    );
  }
};

export default App;

/*

User Story #19 : Si le minuteur est en cours d'exécution, l'élément avec l'id de time-left 
devrait afficher le temps restant au format mm:ss (en décrémentant d'une valeur de 1 et en 
mettant à jour l'affichage toutes les 1000ms). => setTimout & setInterval


*/