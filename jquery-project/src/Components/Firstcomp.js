import React from 'react'
import $ from 'jquery'

export default class Firstcomp extends React.Component {
  jQuerycode = () => {
    $('.button').click(function() {
      $('p').css('color', 'red')
    });
  }
  componentDidMount() {
    this.jQuerycode()
  }
  render() {
    return (
      <div>
        <p>Ok I'm 'p' TAG changing color by clicking button !</p>
        <button className='button'>Click me to change color</button>
      </div>
    );
  }
}