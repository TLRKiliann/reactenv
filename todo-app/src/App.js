import React, {useState, useEffect} from 'react'
import Todolist from './components/Todolist'
import './App.css';

export default function App() {
  const [todos, setTodos] = useState({
    noteRec: '',
    isChecked: false
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setTodos(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  useEffect(() => {
    const isChecked = localStorage.getItem('isChecked') === 'true';
    const noteRec = isChecked ? localStorage.getItem('noteRec') : '';
    setTodos({noteRec, isChecked})
  }, [setTodos])


  useEffect(() => {
    localStorage.setItem('noteRec', todos.noteRec)
    localStorage.setItem('isChecked', todos.isChecked)
  }, [todos])

  const handleSubmit = () => {
    alert("Clean-up ok !")
  }

  const callMap = () => {
    todos.map(todo => {
      return (
        <Todolist
          id={todos}
        />
      )
    })
  }

  return (
    <div className="App">
      <h1>Todo Title</h1>
      <form onSubmit={handleSubmit}>
        {callMap}
        <input
          type="checkbox"
          id="isChecked"
          checked={todos.isChecked}
          onChange={handleChange}
          name="isChecked"
        />
        <input
          type="text"
          onChange={handleChange}
          className="first--input"
          placeholder="noteRec"
          name="noteRec"
          value={todos.name}
        />
        {todos.name}
        <button type='button' onClick={(e) => handleChange(e)}>Add to do</button>
        <button type='submit'>Clear list</button>
      </form>
    </div>
  );
}
