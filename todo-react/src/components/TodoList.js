import React from 'react';
import Todo from './Todo'


function TodoList({todos, toggleComplete, todoRemove}) {
  return (
    <ul className={'todo--class'}>
      {todos.map(todo => (
        <Todo
          key={todo.id} //key!!!
          todo={todo} //def of todo
          toggleComplete={toggleComplete}
          todoRemove={todoRemove}
          className='todo--comp'
        />
      ))}
    </ul>
  );
}

export default TodoList;