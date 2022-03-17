import React from 'react'

export default class Classlocalstorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo:'',
      chk: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleCheck() {
    this.setState(prevTruc => ({
      ...prevTruc,
      chk: !this.state.chk
    }));
  }

  componentDidMount() {
    const { chk, pseudo } = this.state;
    localStorage.getItem('chk', chk)
    localStorage.getItem('pseudo', pseudo);
  }

  handleRemove() {
    const { chk, pseudo } = this.state;
    localStorage.removeItem('chk', chk)
    localStorage.removeItem('pseudo', pseudo);
    alert("Everythings was removed")  
  }

  handleChange(e) {
    const { type, name, checked, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  handleFormSubmit = (e) => {
    const { chk, pseudo } = this.state;
    localStorage.setItem('chk', chk);
    localStorage.setItem('pseudo', pseudo);
    alert("Data saved !!!")
    e.preventDefault()
  };

  render() {
    console.log(this.state.chk, this.state.pseudo)
    return (
      <form 
        onSubmit={(e) => this.handleFormSubmit(e)}
        className='submit--form'>
        <h3>Pseudo :</h3>
        <input
          name='pseudo'
          value={this.state.pseudo}
          onChange={(e) => this.setState({pseudo: e.target.value})} />
        <div className='chk--div'>
          <input
            name='chk'
            type='checkbox'
            checked={this.state.chk ? true : false} 
            onChange={this.handleCheck} />
          <p>Checkbox</p>
        </div>
        <button 
          type='submit'
          onChange={(e) => this.handleChange(e)}
          className='btn--conf'>
            Validate
          </button>
          <button type='button'
            onClick={this.handleRemove}
            className='btn--conf'>
            Remove
          </button>
        <p>{this.state.pseudo}</p>
        <h3>{localStorage.getItem('chk', this.state.chk)}</h3>
        <h3>{localStorage.getItem('pseudo', this.state.pseudo)}</h3>
      </form>
    );
  }
}

//With componentDidMount() evrything is mount when the page run
//you don't use conditionnal rendering in it.