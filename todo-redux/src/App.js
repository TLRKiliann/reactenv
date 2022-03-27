import React from 'react';
import { useState } from 'react';
import { increment, decrement, logger } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [adder, setAdder] = useState(1);
  const [substract, setSubstract] = useState(2);
  
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>{counter}</h3>
      <input type='text' value={adder} onChange={(e) => setAdder(e.target.value)} />
      <button onClick={() => dispatch(increment(adder))}>Submit</button>

      <input type='text' value={substract} onChange={(e) => setSubstract(e.target.value)} />
      <button onClick={() => dispatch(decrement(substract))}>Submit</button>

      {isLogged ? <p>Yes, you are logged !</p> : <p></p>}
      <button onClick={() => dispatch(logger())}>Click</button>
    </div>
  );
}

export default App;
