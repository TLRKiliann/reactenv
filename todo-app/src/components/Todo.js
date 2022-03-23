import React from 'react';


function Todo({ todo, toggleComplete, removeTodo }) {

  function handleCheckboxClick() {
    toggleComplete(todo.id)
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  
  return (
    <div className='todo--div'>
      <input type='checkbox' onClick={handleCheckboxClick} />
      <li>{todo.task}</li>
      <button onClick={handleRemoveClick}>Delete</button>
    </div>
  )
}

export default Todo;