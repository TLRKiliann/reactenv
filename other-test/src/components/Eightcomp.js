import React from 'react'
//import { useEffect } from 'react'
//import { useState } from 'react'
//import { findDOMNode } from 'react-dom'
import $ from 'jquery'

export default class Eightcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ''
    };
  }
  componentDidMount() {
    let _this = this;
    $('button').on('click', function() {
      $('.myH:even').css('color', 'orange')
      $('.myBtn').css('color', 'red')
      $('.myBtn:even').css('background', 'orange')
      _this.setState({ stuff: Math.random() })
    })
  }
  render() {
    return (
      <div>
        <h3 class='myH'>Eight component (jQuery) :</h3>
        <h4 className='result'>{this.state.stuff}</h4>
        <button class='myBtn'>Click</button>
      </div>
    );
  }
}