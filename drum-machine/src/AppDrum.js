import React from 'react';
import DrumPad from './components/DrumPad';
import DisplayDrum from './components/DisplayDrum';
import './App.css';


class AppDrum extends React.Component {
  constructor(props) {
    super(props);

    const musicData = [
      { 
        key: "Q",
        soundTitle: "Header-1",
        soundFormat: "Heater-1.mp3" 
      },
      { 
        key: "W",
        soundTitle: "Heater-2",
        soundFormat: "Heater-2.mp3"
      },
      { 
        key: "E",
        soundTitle: "Heater-3",
        soundFormat: "Heater-3.mp3"
      },
      { 
        key: "A",
        soundTitle: "Heater-4",
        soundFormat: "Heater-4_1.mp3"
      },
      { 
        key: "S",
        soundTitle: "Clap",
        soundFormat: "Heater-6.mp3"
      },
      { 
        key: "D",
        soundTitle: "Open-HH", 
        soundFormat: "Dsc_Oh.mp3"
      },
      { 
        key: "Z",
        soundTitle: "Kick-n'-Ha",
        soundFormat: "Kick_n_Hat.mp3"
      },
      { 
        key: "X",
        soundTitle: "Kick",
        soundFormat: "RP4_KICK_1.mp3"
      },
      { 
        key: "C",
        soundTitle: "Closed-HH",
        soundFormat: "Cev_H2.mp3"
       }
    ];

    const urlLinkSound = "https://s3.amazonaws.com/freecodecamp/drums/";

    this.state = {
      musicData: musicData,
      urlLinkSound: urlLinkSound,
      displayText: "Drum Machine"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyBoard = this.handleKeyBoard.bind(this);
    this.playDrum = this.playDrum.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyBoard);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyBoard);
  }

  handleKeyBoard(e) { //keyboard
    const myArray = this.state.musicData;
    myArray.forEach((k) => {
      return e.keyCode === k.key.charCodeAt(0) ? this.playDrum(k.key) : "";
    });
  }

  handleClick(padKey, e) {
    this.playDrum(padKey);
  }

  playDrum(padKey) {
    const audio = document.getElementById(padKey);
    const Updisplay = this.state.musicData.find((i) => {
      return i.key === padKey
    }).soundTitle;

    audio.currentTime = 0;
    audio.play();
    this.setState((state) => {
      return {
        musicData: this.state.musicData,
        urlLinkSound: this.state.urlLinkSound,
        displayText: Updisplay
      };
    });
  }

  render() {
    const pads = this.state.musicData.map((item) => (
      <DrumPad

        hotKey={item.key}

        soundFormat={this.state.urlLinkSound + item.soundFormat}
        soundTitle={item.soundTitle}
        clickHandler={this.handleClick}
      />
    ));
    return (
      <div id="wrapper">
        <div id="drum-wrapper">
          <div id="drum-machine">

            <DisplayDrum displayText={this.state.displayText} />

            <div id="drum-pad-wrapper">{pads}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrum;