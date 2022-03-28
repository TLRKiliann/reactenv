# supranode

## To call props mynum since ancestor state.

```
import Secomponent from './components/Secomponent'

export default function App() {
  const [num, setNum] = React.useState(0); <-- useState is definied by num (num=0) !!!

  function add() {
    setNum(prevNum => prevNum + 1);
  }

  function minus() {
    setNum(prevNum => prevNum - 1);
  }

return(
      <React.Fragment>
        <button onClick={add}> + </button> //add()
        <Secomponent mynum={num} /> // !!! mynum is here !!!
        <button onClick={minus}> - </button> //minus()
```

## How to use key={id} in React ? :

<div key={props.id}></div>

---

## setState & prevState :

function & class
setState() & this.setState()

!state
...prevState, state.count
[...prevState, state.count]
{...prevState, state.count}

prevState

---

## return ?

return () standard

return <h3>{item.id}</h3> directly

return (
  <h3>{item.id}</h3> not directly
)

return {} object

return {[]} array

---

## ./components/Secomponent.js

```
import React from 'react'

export default function Secomponent(props) { //pass props !!!
  return (
    <div className='div--num'>
      <h2 style={{width:'300px'}}>Count : {props.mynum}</h2> //call props.mynum from App.js !!!
    </div>
  );
}
```

---

## React.createElement :

```
const Fifth = () => {
  return (
    React.createElement('div', {},
      React.createElement('p', {}, "I'm p element in a div (fifth) !"))
  );
}
```
---

## ./components/Mylast.js

### Return data from an array with map() :

```
  const perVar = dataMyfirst.map(item => {
    return item.id + ' ' + item.name + ' ' + item.status
  });
  const newVar = perVar.join(' - ')
```

---

## Several manners :

Differents manner to activate action with click btn.

We have useState defined by car & setCar :

```
  const [car, setCar] = React.useState({
    id: 1,
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "Blue"
  });
```

Simple click button :

```
  function toggle() {
    setSwitchBut(prevSwitch => !prevSwitch)
  }

  return(
      <button
        key={car.id}
        type="button"
        onClick={toggle}
      >
```

All-in one :

```
      <button
        onChange={e => {const val = e.target.value;
          setCar(prevState => {
            return { ...prevState, color: val }
          });
        }}
        onClick={(e)=> updateColor(e)}
      >
```

