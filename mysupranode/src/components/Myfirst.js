import React from 'react'

export default function Myfirst(props) {
  const [useButton, setUseButton] = React.useState('');
  console.log(useButton)
  
  function onToggle() {
    setUseButton(prevent => !prevent)
    console.log(setUseButton)
  }

  return (
    <div className='div--overprops'>
      <div className='div--props'>
        <div className='div--subprops'>
          {props.id && <h3>id = {props.id}</h3>}
          {props.name && <h3>name = {props.name}</h3>}
          {props.status && <h3>status = {props.status}</h3>}
        </div>

          {!useButton && <p className="p--one">{props.name}</p>}
          {useButton && <p className="p--two">{props.status}</p>}

        <button
          type='button' onClick={onToggle} className='btn--me'>
          {useButton ? "Name" : "Status"}
        </button>
      </div>
    </div>
  );
}