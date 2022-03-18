import React from 'react'

export default class Ninecomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberMe: false,
      name: '',
      pwd: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Remove = this.Remove.bind(this);
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const name = rememberMe ? localStorage.getItem('Name') : '';
    const pwd = rememberMe ? localStorage.getItem('Password') : '';
    this.setState({ rememberMe, name, pwd });
  }

  handleChange = (event) => {
    const input = event.target;
    this.setState({
      [input.name]: input.type === 'checkbox' ? input.checked : input.value
    })
  };

  handleFormSubmit = () => {
    const { rememberMe, name, pwd } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
  };

  Remove = () => {
    localStorage.removeItem('rememberMe')
    localStorage.removeItem('Name');
    localStorage.removeItem('Password');
  };

  render() {
    console.log(this.state.pwd)
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          <h4>Name: </h4>
          <input 
            name="name"
            value={this.state.name} 
            onChange={this.handleChange} 
            placeholder='Name'
            required />
        </label>
        {this.state.name}
        <label>
          <h4>Password:</h4>
          <input
            name='password'
            type="password"
            placeholder="Password"
            value={this.state.pwd}
            onChange={(e) => this.setState({pwd: e.target.value})}
            required />
        </label>
        {this.state.pwd}
        <label className='lbl--input'>
          <input
            name="rememberMe"
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleChange} />
          <h5>
              Remember me
          </h5>
        </label>
          <p>Name: {localStorage.getItem('Name')}</p>
          <p>Password: {localStorage.getItem('Password')}</p>
        <button type="submit" className='btn--submit'>Sign In</button>
        <div>
          <button
            onClick={this.Remove}
            className='btn--onClick'>
              Remove
          </button>
        </div>
      </form>
    );
  }
}