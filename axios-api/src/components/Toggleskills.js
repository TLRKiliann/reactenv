import React from "react";

export default function Toggleskills() {
  const [switchButt, setSwitchButt] = React.useState()
  const [model, setModel] = React.useState('Mustang')
  const [car, setCar] = React.useState({
    id: 1,
    brand: "Ford",
  });

  function toggle() {
    setSwitchButt(prevSwitch => !prevSwitch)
  }

  function changeModel() {
    setModel(prevMod => !prevMod)
  }

  return (
    <div className='div--car'>
      <h3 onClick={changeModel}>My Model Car is {model ? 'Ford' : 'Ferrari'}</h3>

      {switchButt && <p>It is a {model ? 'Mustang':'405'}</p>}
      {!switchButt && <p>It is a {model ? 'Mustang':'405'}</p>}

      {switchButt && <strong>{model ? 'Ford' : 'Ferrari'}</strong>}
      {!switchButt && <strong>{model ? 'Ford' : 'Ferrari'}</strong>}

      <button
        key={car.id}
        type="button"
        onClick={toggle}
        /*onChange={e => {
          const val = e.target.value;
          setCar(prevState => {
            return { ...prevState, color: val }
          });
        }}*/
      >
        {switchButt ? "Blue" : "Red"}
      </button>
    </div>
  )
}