import React from 'react'

export default function Secomponent(props) {
  return (
    <div className='div--num'>
      <h2 style={{width:'300px'}}>Count : {props.num}</h2>
    </div>
  );
}