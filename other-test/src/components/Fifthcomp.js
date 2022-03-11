import React from 'react'

export default class Fifthcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: true,
      butt: false,
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState(prevState => !prevState)
  }

  render() {
    const { val, butt } = this.state;
    return (
      <React.Fragment>
        <h2>Fifth component !</h2>
        {butt && <h3>{val ? 'Would you change ?' : 'Keep as you are...'}</h3>}
        {!butt && <h3>{this.setState.val ? 'Would you change ?' : 'Keep as you are...'}</h3>}

        {butt && <button 
          onClick={(e) => this.handleChange(e)}>
          {butt ? "Click to CHANGE !" : "Changing is done !"}
        </button>}
        
        {!butt && <button 
          onClick={(e) => this.handleChange(e)}>
          {this.setState.butt ? "Click to CHANGE !" : "Changing is done !"}
        </button>}
      </React.Fragment>
    );
  }
}
