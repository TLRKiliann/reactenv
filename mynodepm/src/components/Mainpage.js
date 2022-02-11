import React from 'react'

export default function Mainpage(props) {
  return (
    <div className='sec--props'>
      <h3>{props.id}</h3>
      <h3>{props.name}</h3>
      <h3>{props.status}</h3>
    </div>
  );
}