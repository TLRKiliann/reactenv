import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import $ from 'jquery'

export default function Fourthcomponent() {
  const [showInput, setShowInput] = useState('');

  const jQuerycode = () => {
    $('.mouseover--div').hover(function() {
      $('.mouseover--h3').css('color', 'yellow')
      //$('.mouseover--h3').addClass("animated hinge")
    });
  }

  useEffect(() => {
    console.log("Effect with jQuery")
    jQuerycode()
  },);

  const handleChange = () => {
    setShowInput(!showInput)
  }

  return (
    <div>
      <div className='mouseover--div'>
        <h3 className='mouseover--h3'>I'm a div TAG for moseover (jQuery)</h3>
      </div>
      <h3>Password component : </h3>
      <input
        type={showInput ? 'text' : 'password'} 
        name='password' 
        id='password'

        onChange={handleChange}
       />
       <button type='submit' onClick={handleChange}>Submit</button>
    </div>
  );
}