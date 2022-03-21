import './App.css';
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logged } from './actions';

function App() {
  const [number, setNumber] = useState(1);
  const [deliv, setDeliv] = useState(100);

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch(number, deliv);

  return (
    <div className="App">
      <h1>React n Redux Test !</h1>
      <h3>{counter}</h3>

      <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(decrement(number))}>Customer buy...</button>
      <p>It makes {number} caked sold ! It keeps {counter}.</p>

      <input type='text' value={deliv} onChange={(e) => setDeliv(e.target.value)} />
      <button onClick={() => dispatch(increment(deliv))}>Livraison</button>
      <p>Livraison of {deliv} cakes arrived and it keeps {counter}.</p>

      {isLogged ? <p>This message shouldn't appears</p> : ''}
      <button onClick={() => dispatch(logged())}>Logged</button>
    </div>
  );
}

export default App;

      //<button onClick={() => dispatch(buything(counter))}>Buy</button>

      //<button onClick={() => dispatch(increment(1))}>+</button>
      //<h3>{counter}</h3>