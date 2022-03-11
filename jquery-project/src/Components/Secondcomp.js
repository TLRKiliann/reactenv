import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class Secondcomp extends React.Component {
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };
  render() {
    return (
      <div className='long-desc'>
        <div ref='toggle'>
          <ul className='profile-info'>
            <li>
              <span className='info-title'>User Name : </span> koalatr33
            </li>
          </ul>

          <ul className='profile-info additional-profile-info-list'>
            <li>
              <span className='info-email'>Office Email</span> koala@unit.com
            </li>
          </ul>
        </div>
        
        <button className='ellipsis-click' onClick={this.handleToggle}>
            ok<i className='fa-ellipsis-h'/>click
        </button>
      </div>
    );
  }
}