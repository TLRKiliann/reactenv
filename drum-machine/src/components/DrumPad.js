import React from 'react';

export default class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div
        id={this.props.soundTitle}
        key={this.props.hotKey}
        onClick={(e) => this.props.clickHandler(this.props.hotKey, e)}
        className="drum-pad"
      >
        <div className="drum-pad-label">
          <span>{this.props.hotKey}</span>
          <audio
            id={this.props.hotKey}
            className="clip"
            src={this.props.soundFormat}
          ></audio>
        </div>
      </div>
    );
  }
}

/*
---
  keys

  id={this.props.soundTitle}
  key={this.props.hotKey}

---

  Main synthax with clickHandler()

  onClick={(e) => this.props.clickHandler(this.props.hotKey, e)}

---

  <audio
    id={this.props.hotKey}
    className="clip"
--------------------------------------
    src={this.props.soundFormat}
--------------------------------------
  ></audio>

*/