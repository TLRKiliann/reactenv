# test-redux

A simple tester to understand structure & how Redux works with React.

---

## Structure :

* store

* state

* UI (user interface)

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