import React from 'react'

export default class Fifthcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: true,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState(prevState => ({
      val: !this.state.val
    }))
  }

  render() {
    const { val } = this.state;
    return (
      <div>
        <h2>Fifth component !</h2>
        <h2>Customised</h2>
        {val && <h3>{val ? 'Would you change ?' : 'Keep as you are...'}</h3>}
        {!val && <h3>{this.setState.val ? 'Would you change ?' : 'Changed !'}</h3>}

        {val && <button 
          onClick={(e) => this.handleChange(e)}>
          {val ? "Click to CHANGE !" : "Changing is done !"}
        </button>}
        
        {!val && <button 
          onClick={(e) => this.handleChange(e)}>
          {this.setState.val ? "Click to CHANGE !" : "Changing is done !"}
        </button>}
      </div>
    );
  }
}
