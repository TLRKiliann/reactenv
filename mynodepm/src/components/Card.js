import React from 'react'

export default function Card(props) {
  return (
    <div className="main--div">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
    </div>
  )
}