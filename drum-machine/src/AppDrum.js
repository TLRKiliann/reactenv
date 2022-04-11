import React from 'react';
import DrumPad from './components/DrumPad';
import DisplayDrum from './components/DisplayDrum';


class AppDrum extends React.Component {
  constructor(props) {
    super(props);

    const padData = [
      { key: "Q", soundName: "Header-1", soundFile: "Heater-1.mp3" },
      { key: "W", soundName: "Heater-2", soundFile: "Heater-2.mp3" },
      { key: "E", soundName: "Heater-3", soundFile: "Heater-3.mp3" },
      { key: "A", soundName: "Heater-4", soundFile: "Heater-4_1.mp3" },
      { key: "S", soundName: "Clap", soundFile: "Heater-6.mp3" },
      { key: "D", soundName: "Open-HH", soundFile: "Dsc_Oh.mp3" },
      { key: "Z", soundName: "Kick-n'-Hat", soundFile: "Kick_n_Hat.mp3" },
      { key: "X", soundName: "Kick", soundFile: "RP4_KICK_1.mp3" },
      { key: "C", soundName: "Closed-HH", soundFile: "Cev_H2.mp3" }
    ];

    const soundUrlPrefix = "https://s3.amazonaws.com/freecodecamp/drums/";

    this.state = {
      padData: padData,
      soundUrlPrefix: soundUrlPrefix,
      displayText: "Welcome to ReactPad!"
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

  handleKeys(event) { // action key
    const keyArray = this.state.padData; // All list of data.
    keyArray.forEach((k) => {
      event.keyCode == k.key.charCodeAt(0) ? this.playPad(k.key) : "";
    });
  }

  handlePadClick(padKey, event) { // instancy the key event (action click)
    this.playPad(padKey); // call function & pass value of padkey
  }

  playPad(padKey) {
    const audio = document.getElementById(padKey);
    const padDisplay = this.state.padData.find((i) => i.key == padKey)
      .soundName;
    audio.currentTime = 0;
    audio.play();
    this.setState((state) => {
      return {
        padData: this.state.padData,
        soundUrlPrefix: this.state.soundUrlPrefix,
        displayText: padDisplay
      };
    });
  }

  render() {
    const pads = this.state.padData.map((item) => (
      <DrumPad
        hotKey={item.key}
        soundFile={this.state.soundUrlPrefix + item.soundFile}
        soundName={item.soundName}
        clickHandler={this.handlePadClick}
      />
    ));
    return (
      <div id="wrapper">
        <div id="drum-wrapper">
          <div id="drum-machine">
            <DisplayDrum displayText={this.state.displayText} /> //good choice
            <div id="drum-pad-wrapper">{pads}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrum;