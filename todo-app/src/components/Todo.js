import React from 'react'


function Todo({todo, toggleComplete, todoRemove}) {
  //checkbox
  function handleCheckbox() {
    toggleComplete(todo.id); //key
  }
  //delete
  function clickRemove() {
    todoRemove(todo.id); //key
  }
  //checkbox & delete !
  return (
    <div className='todo--div'>
      { todo.completed && 
        <input
          type='checkbox'
          defaultChecked={true}
          onClick={handleCheckbox}
          />
      }
      { !todo.completed &&
        <input 
          type='checkbox'
          defaultChecked={false}
          onClick={handleCheckbox}
        />
      }
      <li>{todo.task}</li>
      <button onClick={clickRemove}>Delete</button>
    </div>
  );
};

export default Todo;