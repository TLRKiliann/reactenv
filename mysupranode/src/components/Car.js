import React from "react";

export default function Car() {
  const [switcher, setSwitcher] = React.useState()
  const [mod, setModel] = React.useState('Ford')
  const [car, setCar] = React.useState({
    id: 1,
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "Blue"
  });

  //add color value at the end of array
  /*
  onClick={(e) => updateColor(e)}

  function updateColor(e) {
    const val = e.target.value;
    setCar(previousState => {
      return {
        ...previousState, color: val
      }
    })
  }
  */

  function toggle() {
    setSwitcher(prevSwitch => !prevSwitch)
  }

  function changeModel() {
    setModel(prevMod => !prevMod)
  }

  return (
    <div className='div--car'>
      <h3 onClick={changeModel}>My Model Car is {mod ? 'Ford' : 'Ferrari'}</h3>

      {switcher && <p>
        It is a {car.model} <mark>{car.color='Red'}</mark> from {car.year}.
      </p>}
      {!switcher && <p>
        It is a {car.model} <mark>{setCar.color ? 'Red' : 'blue'}</mark> from {car.year}.
      </p>}

      {switcher && <strong>
        {car.id} {mod ? 'Ford' : 'Ferrari'} {car.year} <mark>{car.color='Red'}</mark>
      </strong>}
      {!switcher && <strong>
        {car.id} {mod ? 'Ford' : 'Ferrari'} {car.year} <mark>{setCar.color ? 'Red' : 'blue'}</mark>
      </strong>}

      <button
        key={car.id}
        type="button"
        //onClick={(e)=> updateColor(e)}
        onClick={toggle}
        /*onChange={e => {
          const val = e.target.value;
          setCar(prevState => {
            return { ...prevState, color: val }
          });
        }}*/
      >
      {switcher ? "Blue" : "Red"}
      </button>

    </div>
  )
}