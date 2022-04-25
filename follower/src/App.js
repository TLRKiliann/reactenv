import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import $ from 'jquery';

export default function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(1500);
  const [mainTitle, setMainTitle] = useState("SESSION");
  const [play, setPlay] = useState(false);


  const timeout = setTimeout(() => {
    if (timer && play) {
      setTimer(timer - 1)
    }
  }, 1000);

  const incrementBreak = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }
  
  const decrementBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }

  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimer(timer + 60);
    }
  }

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimer(timer - 60);
    }
  }

  const clockify = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ":" + seconds;
  }

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play)
  }

  const playAudio = () => {
    $('#beep').trigger('load');
    $('#beep').trigger('play');
  }

  const stopAudio = () => {
    $('#beep').trigger('pause');
    $('#beep').prop("currentTime", 0);
  }

  const resetTimer = () => {
    if (!timer && mainTitle === 'SESSION') {
      setTimer(breakLength * 60);
      setMainTitle("BREAK")
      playAudio();
    }
    if (!timer && mainTitle === 'BREAK') {
      setTimer(sessionLength * 60)
      setMainTitle("SESSION")
      stopAudio();
    }
  }

  const clock = () => {
    if (play) {
      timeout;
      resetTimer();
    } else {
      clearTimeout(timeout);
    }
  }

  const handleReset = () => {
    clearTimeout(timeout);
    setBreakLength(5);
    setSessionLength(25);
    setTimer(1500);
    setMainTitle("SESSION");
    setPlay(false);
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }

  useEffect(() => {
    clock;
  }, [play, timer, timeout])
  
  const title = mainTitle === 'SESSION' ? 'Session' : 'Break';

  return (
    <div className="wowclock">
      25+5 Clock

      <div className="break-session">
        


        <div id="break-label" type='label'>Break Length
          
          <div className="break-bloc">
            
            <button disabled={play} id="break-decrement" onClick={decrementBreak}>
              -
            </button>

            <div id="break-length">
              {breakLength}
            </div>

            <button disabled={play} id="break-increment" onClick={incrementBreak}>
              +
            </button>
          
          </div>

        </div>



        <div id="timer-label">
          {title}

          <div id="time-left">
            {clockify()}
          </div>

          <button id='start_stop' onClick={handlePlay}>
            {play ? "Pause" : "Play"}
          </button>
        
          <button id='reset' onClick={handleReset}>
            Reset
          </button>

        </div>



        <div id="session-label" type='label'>Session Length
          
          <div className="session-bloc">
            
            <button disabled={play} id="session-decrement" onClick={decrementSession}>
              -
            </button>

            <div id="session-length">
              {sessionLength}
            </div>

            <button disabled={play} id="session-increment" onClick={incrementSession}>
              +
            </button>          

        </div>

        <audio
          id="beep"
          type="audio/wav"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        >
        </audio>

      </div>
    </div>
  </div>
  );
}

//export default App;

/*
          <BreakSessionFragment type="break" label="Break Length" />
          <BreakSessionFragment type="session" label="Session Length" />
*/

