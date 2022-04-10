import React from 'react';


class DisplayDrum extends React.Component {
  render() {
    return (
      <div id='display'>
        <div>{this.props.displayText}</div>
      </div>
    );
  }
}

export default DisplayDrum;