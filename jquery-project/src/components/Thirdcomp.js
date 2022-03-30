import React from 'react'
import ReactDOM from 'react-dom'

export default function Thirdcomp() {
  function find() {
    var node = document.getElementById("node");
    var a = ReactDOM.findDOMNode(node);
    console.log(a);
    a.style.marginBottom = '10px';
    a.style.color = 'turquoise';
    a.style.fontSize = "x-large";
  }
  return <>
    <div>
      <h2>ReactDOM.findDOMNode(node)</h2>
      <div id='node'>DOM Node (look at the console !)</div>
      <button onClick={find}>Click to find</button>
    </div>
  </>;
}