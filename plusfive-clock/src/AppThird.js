import React from 'react';
import {useState} from 'react';
//import TimeController from "./components/TimeController";

export default function AppThird() {
  const [displayTime, setDisplayTime] = useState(25*60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [sessionTime, setSessionTime] = useState(25*60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [soundAudio] = useState(
    new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
  ));

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

  const handleChange = (amount, type) => {
    if (type === 'break') {
      if (breakTime <= 60 && amount < 0) {
        return;
      }
      setBreakTime(prev => prev + amount);
    } else {
      if (sessionTime <= 60 && amount < 0) {
        return;
      }
      setSessionTime(prev => prev + amount);
      if (!timerOn) {
        setDisplayTime(sessionTime + amount);
      }
    }
  }

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
    setBreakTime(5*60);
    setSessionTime(25*60);
  }

  return (
    <div className="">
      <h1>5+25 Clock !</h1>

      <div className="">
        <BreakLength 
          id='break-label'
          title="Break Length"
          handleChange={handleChange} 
          type={"break"} //changeTime
          time={breakTime}
          formatTime={formatTime}
        />
        <SessionLength
          id="session-label"
          title="Session Length"
          handleChange={handleChange} 
          type={"session"} //changeTime
          time={sessionTime}
          formatTime={formatTime}
        />
      </div>
      <h3>{onBreak ? "Break" : "Session"}</h3>
      <h1>{formatTime(displayTime)}</h1>
      <button onClick={controllTime}>{timerOn ? "pause" : "play"}</button>
      <button onClick={resetTime}>{onBreak ? "play" : "reset"}</button>
    </div>
  );
}

function BreakLength({title, handleChange, type, time, formatTime, soundAudio}) {
  return (
    <div id="break-label">
      <h3>Break Length</h3>
      <button id='break-decrement'
        onClick={() => handleChange(-60, type)}>down arrow</button>
      <h3>{formatTime(time)}</h3>
      <button id="break-increment"
        onClick={() => handleChange(60, type)}>up arrow</button>
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