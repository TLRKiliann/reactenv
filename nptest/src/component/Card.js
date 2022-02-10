//import React from 'react'
import dataCard from './dataCard'

export default function Card(props) {
  return (
    <div>
      <h3>{props.id}</h3>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
    </div>
  );
}

