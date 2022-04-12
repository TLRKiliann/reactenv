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
      displayText: "Drum Box Machine"
    };

    this.handlePadClick = this.handlePadClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.playPad = this.playPad.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeys);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys);
  }

  handleKeys(e) { //keyboard
    const keyArray = this.state.musicData;
    //Pour chaque element de l'array on fait correspondre la clef avec la lettre.
    //Si la clef n'existe pas, renvoit ''.
    keyArray.forEach((k) => {
      return e.keyCode === k.key.charCodeAt(0) ? this.playPad(k.key) : "";
    });
  }

  //handleClick => handlePadClick !!! i.key === padKey === k.key
  handlePadClick(padKey, e) {
    this.playPad(padKey);
  }

  playPad(padKey) {
    //Faire correspondre la touche du DrumPad (padKey)
    //avec la clef (key) de musicData
    //et du titre du son joué et de l'URL.
    const audio = document.getElementById(padKey);
    const padDisplay = this.state.musicData.find((i) => {
      return i.key === padKey //i.key === k.key
    }).soundTitle;

    audio.currentTime = 0;
    audio.play();
    //Actualisation des state
    this.setState((state) => {
      return {
        musicData: this.state.musicData,
        urlLinkSound: this.state.urlLinkSound,
        displayText: padDisplay
      };
    });
  }

  render() {
    const pads = this.state.musicData.map((item) => (
      <DrumPad

        hotKey={item.key}

        soundFormat={this.state.urlLinkSound + item.soundFormat}
        soundTitle={item.soundTitle}
        clickHandler={this.handlePadClick}
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