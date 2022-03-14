import React, { useState } from 'react'

export default function Tencomp() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  console.log(count)

  function increment() {
    setCount(count + 1)
  }
  console.log(count)

  return(
    <div>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <h3>{count}</h3>
      <div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}