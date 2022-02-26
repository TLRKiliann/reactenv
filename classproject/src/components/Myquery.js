import React from 'react'
import $ from 'jquery'


export default class Myquery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      county: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.queryCode = this.queryCode.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  queryCode() {
    $('#content').textWave({
      text: 'ok my jQuery work !',
      ratio: 2,
      repeat: 2,
      framerate: 60
    });   
  }
  componentDidMount() {
    this.queryCode()
  }

  handleChange() {
    this.setState(state => ({
      county: state.county += 1
    }));
  }
  render() {
    return (
      <div>
        <form>
          <span id="content"></span>
          <input
            type="text"
            value={this.state.county}
            onChange={this.handleChange}
            placeholder="Your Name"
          />
          <p>{this.state.county}</p>
        </form>
      </div>
    );
  }
};