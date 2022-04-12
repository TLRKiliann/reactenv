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
        soudFormat: "Heater-6.mp3"
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
        soudFormat: "RP4_KICK_1.mp3"
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
      displayText: "Hello les affreux !"
    };
  this.handleKey = this.handleKeys.bind(this);
  this.playPad = this.playPad.bind(this);
  this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey)
  }

  handleKey(e) { //keyboard
    const myArray = this.state.musicData;
    myArray.forEach((k) => {
      return e.keyCode === k.key.charCodeAt(0) ? this.playPad(k.key) : "";
    })
  }
  
  clickHandler(padKey, e) { //Reprend le (k.key) et transforme en (padkey)
    this.playPad(padKey);
  }

  playPad(padKey) {
    const audio = document.getElementById(padKey);
    const padDisplay = this.state.musicData.find((i) => {
      return i.key === padKey
    }).soundTitle;
    audio.currentTime = 0;
    audio.play();
    this.setState(state => {
      return {
        musicData: this.state.musicData,
        urlLinkSound: this.state.urlLinkSound,
        displayText: padDisplay
      }
    })

  render() {
    const maptoclick = this.state.musicData.map(item => {
      <DrumPad
        hotkey={item.key}
        soundTitle={item.soundTitle}
        soundFormat={this.state.urlLinkSound + item.soundFormat}
        clickHandler={this.handlePadClick}
      />
    })
    return(
      <DisplayDrum displayText={this.state.displayText} />
      )
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div 
        id={this.props.soundTitle}
        key={this.props.hotkey}
      >
                  
      </div>
    )
  }
}


class DisplayDrum extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>{this.props.displayText}
      </>
    )
  }
}