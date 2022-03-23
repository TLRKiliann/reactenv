import React from 'react';
import Todo from './Todo'


function TodoList({todos, toggleComplete, todoRemove}) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          todoRemove={todoRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;