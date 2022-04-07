import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementone, decrement, logged } from './actions';
import './App.css';


function App() {
  const [number, setNumber] = useState(20);
  const [delivone, setDelivone] = useState(50);
  const [deliv, setDeliv] = useState(100);

  const counter = useSelector(state => state.counter);
  //const counterone = useSelector(state => state.counterone);
  //const counterdec = useSelector(state=> state.counterdec);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch(number, deliv, delivone);
  //<h3>counterone (state=delivone) : {counterone}</h3>
  //<h3>counterdec (state=deliv) : {counterdec}</h3>
  function handleClick() {
    dispatch(decrement(number))
    setNumber('');
  }
  return (
    <div className="App">
      <h1>React n Redux Test !</h1>
      <h3>counter : {counter}</h3>

      <input 
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder='enter number here'
        className='first--input'
      />

      <button onClick={handleClick}>Customer buy...</button>
      <p>If you click now, it will make {number} cakes sold ! And it keeps {counter - number}.</p>

      <input disabled={true} type='text' value={delivone} onChange={(e) => setDelivone(e.target.value)} />

      <button onClick={() => dispatch(incrementone(delivone))}>Livraison</button>
      <p>Livraison of {delivone} cakes arrived and it keeps {counter}.</p>

      <input disabled={true} type='text' value={deliv} onChange={(e) => setDeliv(e.target.value)} />
      
      <button onClick={() => dispatch(increment(deliv))}>Livraison</button>
      <p>Livraison of {deliv} cakes arrived and it keeps {counter}.</p>

      {isLogged ? <p>This message shouldn't appears</p> : <p></p>}
      <button onClick={() => dispatch(logged())}>Hidden MSG</button>
    </div>
  );
}

export default App;
