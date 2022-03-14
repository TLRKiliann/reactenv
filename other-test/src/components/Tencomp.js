import React, { useState } from 'react'

/*const Initialcount = () => {
  console.log("ok function")
  return 4
}*/

export default function Tencomp() {
  const [count, setCount] = useState(0)
  //const [count, setCount] = useState(Initialcount)

  //count - 2
  function decrement() {
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }
  console.log(count)

  //count + 1
  function increment() {
    setCount(count + 1)
    setCount(count + 1)
  }
  console.log(count)

  return(
    <div className='border--count'>
      <h3>Tencomp (testing state)</h3>
      <p>Look at the console !</p>
      <div className='count--class'>
        <div>
          <button onClick={decrement}>-</button>
        </div>
        <h3>{count}</h3>
        <div>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}