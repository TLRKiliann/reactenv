import React, {useState} from 'react'
import Todolist from './components/Todolist'
import './App.css';

export default function App() {
  const [todos, setTodos] = useState(
  {
    id: 1, 
    name: "list 1",
    complete: false
  },
  {
    id: 2, 
    name: "list 2",
    complete: false
  });

  /*useEffect(() => {
    localStorage.setItem('ID')
    localStorage.setItem('Name')
  })*/

  const handleChange = (e) => {
    const input = e.target;
    setTodos(prevState => ({
      ...prevState,
      [input.name]: input.type === 'checkbox' ? input.checked : input.value}
    ))
  }
  const callMap = () => todos.map(todo => {
    return (
      <Todolist
        id={todos.id}
        name={todos.name}
        complete={todos.complete}
      />
    )
  })
  return (
    <div className="App">
      <h1>Todo Title</h1>
      <div>
        {callMap}
        <input
          type='text'
          name='inputone'
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        {(e) => setTodos(e.target.value)}
        <button type='button' onClick={(e) => handleChange(e)}>Add to do</button>
        <button type='button'>Clear list</button>
        
      </div>
    </div>
  );
}
