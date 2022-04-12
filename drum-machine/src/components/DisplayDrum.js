import React from 'react';


export default class DisplayDrum extends React.Component {
  constructor(props) {
    //debugger;
    super(props);
    //console.assert(props)
  }

  render() {
    return (
      <div id="display">
        <div id="display-text">{this.props.displayText}</div>
      </div>
    );
  }
}