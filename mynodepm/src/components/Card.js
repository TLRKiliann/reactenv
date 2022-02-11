import React from 'react'

export default function Card(props) {
  return (
    <div className="card--div">
      <h3>Id: {props.id}</h3>
      <h3>Name: {props.name}</h3>
      <h3>{props.age} years</h3>
    </div>
  )
}