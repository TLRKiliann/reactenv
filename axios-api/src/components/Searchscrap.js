import React from 'react'

export default class Searchscrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    fetch('...')
      .then(res => res.json())
      .then(object => {
        this.setState({
          item : object
        })
      })
  }
  render() {
    const { item } = this.state;
    return (
      <div className='supra--class'>
        <div className='child--class'>
          <p>{item.name}</p>
        </div>
        <div className='child--class'>
          <p>{item.age}</p>
        </div>
        <div className='child--class'>
          <p>{item.status}}/p>
        </div>
      </div>
    );
  }
}