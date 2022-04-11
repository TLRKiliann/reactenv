import React from 'react';


class DisplayDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display">
        <div id="display-text">{this.props.displayText}</div>
      </div>
    );
  }
}

export default DisplayDrum;