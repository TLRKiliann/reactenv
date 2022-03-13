import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Sixcomp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('! Effect !')
    console.log(`Vous avez cliqué ${count} fois`);
    //document.title = `Vous avez cliqué ${count} fois`;
  }, [count]); //if value changed

  const handleClick = (e) => {
    setCount(count + 1)
    e.preventDefault()
  }
  //To understand how useEffect works with console
  console.log("Component start here...")
  console.log("State of count : ", count)
  
  return (
    <div className='class--six'>
      <h5>My Sixcomp with "useEffect" !</h5>
      <p className='count--class'>{count}</p>
      <p id='truc'></p>
      <button 
        type='button'
        onClick={(e) => handleClick(e)}
        className='btn--class'>
        Click and look at the console !
      </button>
    </div>
  );
}