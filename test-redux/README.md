# test-redux

A simple tester to understand structure & how Redux works with React.

---

## Structure :

* store

* state

* action

* reducers

* dispatch

---

[Schema](https://dev-to-uploads.s3.amazonaws.com/i/hmo95mvmnw2wmzjoab1t.png)

---

## Importations from Redux :

index.js (main) \
`import { createStore } from 'redux';`

/reducers/index.js \
`import { combineReducers } from 'redux';`\
& :\
`import counterReducers from 'counter';` \
`import loggerReducers from 'isLogged';`

## Importation from React :

App.js\
`import {useState} from 'react';`

index.js (main)\
`import allReducers from './reducers'; ('./reducers/index.js')`

App.js\
`import { actions } from './actions'; ('./actions/index.js')`

## Importation from React-Redux :

`import { Provider } from 'react-redux';`

`import { useSelector, useDispatch } from 'react-redux';`

---

## With one more action => `INCREMENTONE` and one more state => `delivone` :

### App.js

```
	...
	const [delivone, setDelivone] = useState(50);
	...
```


```
	    ...
      <button onClick={() => dispatch(incrementone(delivone))}>Livraison</button>
      <p>Livraison of {delivone} cakes arrived and it keeps {counter}.</p>

      <input disabled={true} type='text' value={deliv} onChange={(e) => setDeliv(e.target.value)} />
      ...
```

---

### /actions/index.js

```
...
const INCREMENTONE = 'INCREMENTONE';

export const incrementone = (delivone) => {
  return {
    type: INCREMENTONE,
    payload: delivone
  }
}
...
```

---

### /reducers/counter.js

```
const INCREMENTONE = 'INCREMENTONE';

const counterReducers = (state=20, action) => {
  switch (action.type) {

    ...
    case INCREMENTONE:
      return (
        state + action.payload
      )
     ...
};

export default counterReducers;
```

---

## Special features

This part show you how to reset an input value (number) with setNumber('') after clicking button with e.target.value. 


```
  const [number, setNumber] = useState(20);

...

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
      />

      {number ? <button
        onClick={handleClick}
        style={{padding: '5px 20px'}}>
        Buy
      </button> : ''}

      <p>
        If you click now, it will make {number} cakes sold ! And it keeps {counter - number}.
      </p>

```