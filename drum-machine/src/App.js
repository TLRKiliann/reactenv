import React from 'react';
import {useState, useEffect} from 'react';
//import audioClip from './components/audioClip'
//import DrumPad from './components/DrumPad'
import './App.css';

function App() {
  const [active, setActive] = useState('');

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      //console.log(event.key)
      playSound(event.key.toUpperCase())
    })
    document.removeEventListener("keydown", (event) => {
      console.log(event.key)
    })
    //return () => {
      //document.removeEventListener("keydown", handleKeyPress)
  }, []);

  const audioClip = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const playSound = (selector) => {
    const audioTag = document.getElementById(selector);
    audioTag.play();
    setActive(selector);
    setTimeout(() => setActive(''), 200)

  };
  return (
    <div id="drum-machine">
      <div id='display'>{active}</div>
        <div className={`drum-pads ${active && "btn-warning"}`}>
          {audioClip.map(clip => (
            <div
              key={clip.url}
              onClick={() => {
                playSound(clip.keyTrigger)
              }}
              className='drum-pad'
              id={clip.url}
            >
              {clip.keyTrigger}
          <audio className="clip" id={clip.keyTrigger} src={clip.url} />
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
