import React, {useState} from 'react'
import Todo from './components/Todo'

export default function Todolist() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div>
      <h2>Count</h2>
        <Todo count={count} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};