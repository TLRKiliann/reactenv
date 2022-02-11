import React from 'react'

export default function Myfirst(props) {
  return (
    <div className='div--props'>
      <h3>id = {props.id}</h3>
      <h3>name = {props.name}</h3>
      <h3>status = {props.status}</h3>
    </div>
  );
}