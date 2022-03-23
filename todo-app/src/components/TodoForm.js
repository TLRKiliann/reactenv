import React from 'react';
import { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';
//import { v4 as uuidv4 } from 'uuid';


function TodoForm(addTodo) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  })

  function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task) {
      addTodo({ ...todo, id: '' }) //uuid.v4()
      //reset task input
      setTodo({ ...todo, task: ''})
    }
  }
  /*  
    if (todo.task.trim()) {
      addTodo({ ...todo, id: '' }) //uuid.v4()
      //reset task input
      setTodo({ ...todo, task:''})
    }
  }*/
  return (
    <form onSubmit={handleSubmit}>
        <input
            name='task'
            type='text'
            value={todo.task}
            onChange={handleTaskInputChange} />
        <button type='submit'> Button </button>
    </form>
  );
};

export default TodoForm;