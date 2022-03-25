# test-redux

A simple tester to understand structure & how Redux works with React.

## Structure :

* state

* Definie const

* Action

* Reducers

* Dispatch actions


## Importations from Redux :

import { createStore } from 'redux';
import { combineReducers } from 'redux';


## Importation from React :

import {useState} from 'react';

import { actions } from './actions'; ('./actions/index.js')
import allReducers from './reducers'; ('./reducers/index.js')

from 'react-redux';

---

## With one more state => `INCREMENTONE` :

### App.js

```
  const [delivone, setDelivone] = useState(50);
```
...

```
      <button onClick={() => dispatch(incrementone(delivone))}>Livraison</button>
      <p>Livraison of {delivone} cakes arrived and it keeps {counter}.</p>

      <input disabled={true} type='text' value={deliv} onChange={(e) => setDeliv(e.target.value)} />
```

---

### /actions/index.js

```

const INCREMENTONE = 'INCREMENTONE';

	...
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

export default counterReducers;

```