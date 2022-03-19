import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React n Redux</h1>
        <h3>Counter : {counter}</h3>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement(3))}>-</button>
        {isLogged ? <h3>Information that we should not see</h3> : ''}
      </header>
    </div>
  );
}

export default App;
