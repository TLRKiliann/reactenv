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
    fetch('https://www.thetimes.co.uk/article/schoolboy-impostor-brian-mackinnon-disowns-his-biopic-tpsp67dw3')
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
          <p>{JSON.stringify(item)}</p>
        </div>
        <div className='child--class'>
          <p>{item.main}</p>
        </div>
        <div className='child--class'>
          <p>{item}</p>
        </div>
      </div>
    );
  }
}