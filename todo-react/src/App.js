import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'


const LOCAL_STORAGE_KEY = 'todo-key'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageToGet = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageToGet) {
      setTodos(storageToGet);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function addTodo(todo) { //todo of TodoForm.js
    setTodos([todo, ...todos]); //sens de l'affichage
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        }
    return todo; //car todos.map()...
    }))
  }

  function todoRemove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className='app--class'>
      <h1>Ma liste de truc !</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        todoRemove={todoRemove}
      />
    </div>
  );
}

export default App;