import React, { useState, useEffect } from 'react'
//import Todolist from './components/Todolist'
import './App.css';

export default function App() {
  const [todos, setTodos] = useState({
      isChecked: false,
      noteRec: ''
  })

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target
    setTodos(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
    const { isChecked, noteRec } = todos;
    localStorage.setItem('isChecked', isChecked)
    localStorage.setItem('noteRec', noteRec)
  }

  useEffect(() => {
    const isChecked = localStorage.getItem('isChecked') === 'true';
    const noteRec = isChecked ? localStorage.getItem('noteRec') : '';
  },[]);

  const handleSubmit = () => {
    const { isChecked, noteRec } = todos;
    localStorage.removeItem('isChecked', isChecked)
    localStorage.removeItem('noteRec', noteRec);
    alert("Clean-up ok !")
  }

  const retrieveData = () => {
    const isChecked = localStorage.getItem('isChecked') === 'true';
    const noteRec = isChecked ? localStorage.getItem('noteRec') : '';
  };

  /*const callMap = todos.map(todo => {
      return <Todolist id={todo.id} />
  })*/

  return (
    <form onSubmit={handleSubmit} className="App">
      <h1>Todo Title</h1>

      <input
        id="isChecked"
        type="checkbox"
        name="isChecked"
        checked={todos.isChecked}
        onChange={handleChange}
      />
      {todos.isChecked}
      <input
        type="text"
        name="todos"
        value={todos.noteRec}
        onChange={(e) => setTodos({noteRec: e.target.value})}
        className="first--input"
        placeholder="enter note"
      />
      {todos.noteRec}
      <button type='button' onClick={(e) => handleChange(e)}>Add to do</button>
      <button type='submit' value='onSubmit'>Clear</button>
      <button type='button' onClick={retrieveData}>Retrive ALL</button>
    </form>
  );
}
