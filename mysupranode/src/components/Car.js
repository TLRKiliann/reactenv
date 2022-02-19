import React from "react";

export default function Car() {
  const [mod, setModel] = React.useState({brand: 'Ford'})
  const [car, setCar] = React.useState({
    id: 1,
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });


  const updateColor = (e) => {
    const val = e.target.value;
    setCar(previousState => {
      return { 
        ...previousState, color: val }
    })
  }

  function changeModel() {
    setModel(prevMod => !prevMod)
  }

  return (
    <>
      <h1 onClick={changeModel}>My {mod.brand ? 'Ford' : 'Ferrari'}</h1>
      <p>
        It is a {car.color ? 'red' : 'blue'} {car.model} from {car.year}.
      </p>
      <button
        key={car.id}
        type="button"
        onClick={(e) => updateColor(e)}
        //onChange={changeModel} doesn't work...
        /*onChange={e => {
          const val = e.target.value;
          setCar(prevState => {
            return { ...prevState, color: val }
          });
        }}*/
      >
      Blue
      </button>
      <strong>
        {car.id} {mod.brand ? 'Ford' : 'Ferrari'} {car.year} {car.color ? 'red' : 'blue'}
      </strong>
    </>
  )
}