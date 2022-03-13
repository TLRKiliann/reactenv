import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { findDOMNode } from 'react-dom'
import $ from 'jquery'

export default function Eightcomp() {
  const [state, setState] = useState('');

  const jQuerycode = () => {
    const el = findDOMNode(this.ref.toggle) {
      handleCheck()
    }
  }

  useEffect(() => {
    if (el) {
    console.log(el);
    }
  },[])

  const handleCheck = () => {
    setState({state: })
  }

  return (
    <div>
      <h4 ref='toggle'>Component with HOOKS !</h4>
      <button onClick={handleCheck}>Click</button>
    </div>
  );
};