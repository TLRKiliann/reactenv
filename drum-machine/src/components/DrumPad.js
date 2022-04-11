import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.soundName}
        key={this.props.hotKey}
        onClick={(e) => this.props.clickHandler(this.props.hotKey, e)}
        className="drum-pad"
      >
        <div className="drum-pad-label">
          <span>{this.props.hotKey}</span>
          <audio
            id={this.props.hotKey}
            className="clip"
            src={this.props.soundFile}
          ></audio>
        </div>
      </div>
    );
  }
}

export default DrumPad;