import React from 'react'

export default function Todolist(props) {
  return (
    <div>
      <input 
        type='checkbox'
        name='box' 
        checked='checkbox' />
      <p>{props.id}</p> 
      <p>{props.name}</p>
    </div>
  )
}