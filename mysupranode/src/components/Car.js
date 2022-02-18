import React from "react";

export default function Car() {
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
        ...previousState, color: val
      }
    })
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color ? 'red' : 'blue'} {car.model} from {car.year}.
      </p>
      <button
        key={car.id}
        type="button"
        onClick={(e) => updateColor(e)}
        /*onChange={e => {
          const val = e.target.value;
          setCar(prevState => {
            return { ...prevState, color: val }
          });
        }}*/
      >
      Blue
      </button>
      <strong>{car.id} {car.brand} {car.year} {car.color ? 'red' : 'blue'}</strong>
    </>
  )
}