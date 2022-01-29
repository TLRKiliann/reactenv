import React from "react"
import logo from './logo.svg';
import './App.css';

function MyCallTest() {
  return (
    <div className="flex-1">
      <img src={logo} className="img-up" alt="logo" />
      <nav className="nav-title">
        <ul>
          <li>Service</li>
          <li>Information</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default MyCallTest;
