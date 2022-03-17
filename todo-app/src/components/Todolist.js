import React from 'react'

export default class LocalStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo:'',
      chk: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleChange() {
    this.setState(prevTruc => ({
      ...prevTruc,
      chk: !this.state.chk
    }));
  }

  handleCheck(e) {
    const {type,name} = this.state;
    this.setState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? name : value
    }))
  }
  render() {
    return (
      <form>
        <input name='pseudo' value={this.state.pseudo} onChange={(e) => setState({pseudo: e.target.value})}/>
        <input name='valider' type='checkbox' checked={false} onChange={this.handleChange}/>
        <buttton type='submit' onClick={this.handleCheck}></button>
      </form>

    );
  }
}