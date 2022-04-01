//import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MachineQuote from './MachineQuote'
import reportWebVitals from './reportWebVitals';

/*
const container = document.getElementById('app');

ReactDOM.render(container, <App />, function() {
  // Called after inital render or any update.
  console.log('rendered')
});
*/
ReactDOM.render(
  <React.StrictMode>
    <MachineQuote />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
