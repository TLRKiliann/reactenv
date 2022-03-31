import React from 'react';
import MachineQuote from './components/MachineQuote'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    color : 'gray'
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  
  handleChangeColor(color) {
    this.setState({
      color: color
    });
  }
  render() {
    return(
      <div id="app" className={this.state.color}>
        <MachineQuote onChangeAppColor={this.handleChangeColor} />
      </div>
    );
  }
}

export default App;