import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Sixcomp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect')
  }, [count]);

  const handleClick = () => {
    setCount(count + 1)
  }

  componentDidMount() {

  }
  return (
    <div>
      <h3>My Sixcomp !</h3>
      <>{count}</>
      <button type='button' onClick={handleClick}>Click</button>
    </div>
  );
}