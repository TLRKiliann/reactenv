import React from 'react'

export default function Myfirst(props) {
  const [useButton, setUseButton] = React.useState();
  const [darkMode, setDarkMode] = React.useState(true);
  
  function onclick() {
    setUseButton(prevent => !prevent)
    toggle()
  };
  
  function toggle() {
    setDarkMode(preventdark => !preventdark)
  }
  return (
    <div className='div--overprops'>
      <div className='div--props'>
        <div className='div--subprops'>
          {props.id && <h4>{props.id}</h4>}
          {props.name && <h4>name = {props.name}</h4>}
          {props.status && <h4>status = {props.status}</h4>}
        </div>

          {!useButton && <p className="p--one">{props.name}</p>}
          {useButton && <p className="p--two">{props.status}</p>}

        <button
          type='button'
          onClick={onclick}>
          {useButton ? "Name" : "Status"}
          {darkMode ? 'black' : 'dodgerblue'}
        </button>
      </div>
    </div>
  );
}