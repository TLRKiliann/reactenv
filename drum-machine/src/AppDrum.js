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

    const soundUrlPrefix = "https://s3.amazonaws.com/freecodecamp/drums/"; //main web link

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
    document.addEventListener('keydown', this.handleKeys);
  }

  componentDidWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys)
  }
  // SPECIAL !!!
  handleKeys(event) {
    const ari = this.state.padData;
    ari.forEach((k) => {
      return event.keyCode === k.key.charCodeAt(0) ? this.playPad(k.key) : '';
    })
  }

  handlePadClick(padKeys, event) {
    this.playPad(padKeys);
  }

  playPad(padKeys) {
    const audio = document.getElementById(padKeys);
    const padDisplay = this.state.padData.find(i => i.key === padKeys).soundName;
    audio.currentTime = 0;
    audio.play();
    this.setState(state => {
      return {
        padData: this.state.padData,
        soundUrlPrefix: this.state.soundUrlPrefix,
        displayText: padDisplay
      }
    })
  }

  render() {
    const mappdata = this.state.padData.map((item) => (
      <DrumPad 
        hotkey={item.key} // !!! err
        //id={item.id} pas besoin !!!
        key={item.key}
        soundFile={this.state.soundUrlPrefix + item.soundFile}
        soundName={item.soundName}
        clickHandler={this.handlePadClick}
      />
    ));
    
    return (
      <div>
        <DisplayDrum displayText={this.state.displayText} />
        <div id="drum-pad-wrapper">{mappdata}</div>
      </div>

    );
  }
}

export default AppDrum;