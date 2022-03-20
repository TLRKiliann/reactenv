import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logger } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React n Redux Test !</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged ? <p>This message shouldn't appears</p> : ''}
      <button onClick={() => dispatch(logger())}>Logger</button>

    </div>
  );
}

export default App;
