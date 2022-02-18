import React from "react";

export default function Car() {
  const [car, setCar] = React.useState([
  {
    id: 1,
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: ""
  },
  {
    id: 2,
    brand: "Mazeratti",
    model: "406",
    year: "1996",
    color: ""
  }]);

  console.log('CARNAME', car)
  console.log(car.map(item => item.brand))

  const updateColor = () => {
    setCar(prevState => !prevState.color)
  }

  const deal = car.map(item => {
    return (
      <div>
        <p key={item.id}>{item.brand} {item.year} {item.color ? 'red' : 'blue'}</p>
      </div>
    )
  })

  return (
    <div>
        {deal}
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </div>
  )
}