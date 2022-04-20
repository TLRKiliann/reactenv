import React from 'react';
import {useState} from 'react';
//import TimeController from "./components/TimeController";



export default function AppThird() {
  const [displayTime, setDisplayTime] = useState(25*60);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionTime, setSessionTime] = useState(25*60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [soundAudio] = useState(
    new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
  ));

  const MAX_LENGTH = 60;
  const MIN_LENGTH = 1;

  //les 2 de l'autre
  const updateElement = (element, str) => {
    document.getElementById(element).innerHTML = str
  }

  const updateElementTimeLeft = () => {
    timeLeft = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    updateElement('time-left', timeLeft)
  }
  //origin
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      ( minutes < 10 ? "0" + minutes : minutes ) + ":" +
      ( seconds < 10 ? "0" + seconds : seconds )
    );
  }

  const playAudio = () => {
    soundAudio.currentTime = 0;
    soundAudio.play();
  }

  const incrementBreakLength = () => {
    if (breakLength === MAX_LENGTH) { 
      return;
    }
      breakLength++
    if (timerLabel === 'Break') {
      minutes = breakLength
      seconds = 0
    }
    updateElement('break-length', breakLength)
  }

  /*
  const handleChange = (amount, type) => {
    if (type === 'break') {
      if ((breakLength <= 60) && (amount < 0)) {
        return;
      }
      setBreakLength(prev => prev + amount);
    } else {
      if (sessionTime <= 60 && amount < 0) {
        return;
      }
      setSessionTime(prev => prev + amount);
      if (!timerOn) {
        setDisplayTime(sessionTime + amount);
      }
    }
  }*/

  const controllTime = () => {
    let second = 1000; //one milli seconds
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;
    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime(prev => {
            if (prev <= 0 && !onBreakVariable) {
              playAudio();
              onBreakVariable = true;
              setOnBreak(false);
              return sessionTime;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("intervalID", interval);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem("intervalID"))
    }
    setTimerOn(!timerOn);
  }

  const resetTime = () => {
    setDisplayTime(25*60);
    setBreakLength(5);
    setSessionTime(25*60);
  }

  return (
    <div className="">
      <h1>5+25 Clock !</h1>
      <div>

        <div id="break-label">
          <BreakLength 
            id="break-length"
            title="Break Length"
            handleChange={handleChange} 
            type={"break"} //changeTime
            time={breakLength}
            formatTime={formatTime}
          />
        </div>

        <div id="session-label">
          <SessionLength
            id="session-length"
            title="Session Length"
            handleChange={handleChange} 
            type={"session"} //changeTime
            time={sessionTime}
            formatTime={formatTime}
          />
        </div>

      </div>
      <h3>{onBreak ? "Break" : "Session"}</h3>
      <h1>{formatTime(displayTime)}</h1>
      <button onClick={controllTime}>{timerOn ? "pause" : "play"}</button>
      <button onClick={resetTime}>{onBreak ? "play" : "reset"}</button>
    </div>
  );
}

function BreakLength({title, incrementBreakLength, handleChange, type, time, formatTime, soundAudio}) {
  return (
    <div id="break-label">
      <h3>Break Length</h3>
      <button id='break-decrement'
        onClick={() => incrementBreakLength()}>down arrow</button>
      <h3>{formatTime(time)}</h3>
      <button id="break-increment"
        onClick={() => handleChange(1, type)}>up arrow</button>
      <audio src={soundAudio}> </audio>
    </div>
  );
}

function SessionLength({title, handleChange, type, time, formatTime, soundAudio}) {
  return (
    <div id="session-label">
      <h3>Session Length</h3>
      <button id="session-decrement"
        onClick={() => handleChange(-60, type)}>down arrow</button>
      <h3>{formatTime(time)}</h3>
      <button id="session-increment"
        onClick={() => handleChange(60, type)}>up arrow</button>
      <audio src={soundAudio}> </audio>
    </div>
  );
}