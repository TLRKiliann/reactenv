import React from 'react';
//import bootstrap from 'bootstrap';
import './App.css';

function App() {
  play(str) {

    if (str === "q" || str === "Q") {
      document.getElementById('display').innerText = "Rock on!";
    } else if (str === "w" || str === "W") {
      document.getElementById('display').innerText = "Drum Roll!";
    } else if (str === "e" || str === "E") {
      document.getElementById('display').innerText = "Music Time!";
    } else if (str === "a" || str === "A") {
      document.getElementById('display').innerText = "Big Hit!";
    } else if (str === "s" || str === "S") {
      document.getElementById('display').innerText = "Party On!";
    } else if (str === "d" || str === "D") {
      document.getElementById('display').innerText = "Jamming on!";
    } else if (str === "z" || str === "Z") {
      document.getElementById('display').innerText = "Popstarts!";
    } else if (str === "x" || str === "X") {
      document.getElementById('display').innerText = "On the mood!";
    } else if (str === "c" || str === "C") {
      document.getElementById('display').innerText = "On the rythm!";
    }
    let audio = document.getElementById(str);
    audio.play();
  }

  return(
    <div className="App">
      <div className='sub--app'>
        <h1>Drum Machine</h1>

        <div id="drum-machine">

          <div id="display">Click Buttons</div>


            <div className='container'>
              <div className='row'>
                <button className='drum-pad col' id='unit_sound1' onClick={play('Q')}>
                  Q
                  <audio type="audio/mp3" className='clip' id='Q' src='./music/audio1.mp3'/>
                </button>

                <button className='drum-pad col' id='unit_sound2' onClick={play('W')}>
                  W
                  <audio type="audio/mp3" className='clip' id='W' src='./music/audio2.mp3'/>
                </button>

                <button className='drum-pad col' id='unit_sound3' onClick={play('E')}>
                  E
                  <audio type="audio/mp3" className='clip' id='E' src='./music/audio3.mp3'/>
                </button>
              </div>


              <div className='row'>
                <button className='drum-pad col' id='unit_sound4' onClick={play('A')}>
                  A
                  <audio type="audio/mp3" className='clip' id='A' src='./music/audio4.mp3'/>
                </button>

                <button className='drum-pad col' id='unit_sound5' onClick={play('S')}>
                  S
                  <audio type="audio/mp3" className='clip' id='S' src='./music/audio5.mp3'/>
                </button>

                <button className='drum-pad col' id='unit_sound6' onClick={play('D')}>
                  D
                  <audio type="audio/mp3" className='clip' id='D' src='./music/audio6.mp3'/>
                </button>
              </div>


              <div className='row'>
                <button className='drum-pad col' id='unit_sound7' onClick={play('Z')}>
                  Z
                  <audio type="audio/mp3" className='clip' id='Z' src='./music/audio7.mp3'/>
                </button>

                <button className='drum-pad col' id='unit_sound8' onClick={play('X')}>
                  X
                  <audio type="audio/mp3" className='clip' id='X' src='./music/audio8.mp3'/>
                </button>

                <button className='drum-pad col' id='unit_sound9' onClick={play('C')}>
                  C
                  <audio type="audio/mp3" className='clip' id='C' src='./music/audio9.mp3'/>
                </button>

              </div>

            </div>
          </div>

      </div>
    </div>
  );
}

export default App;
