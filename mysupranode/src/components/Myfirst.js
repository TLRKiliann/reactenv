import React from 'react'

export default function Myfirst(props) {
  const [useButton, setUseButton] = React.useState();
  console.log(useButton)
  
  function onToggle() {
    setUseButton(prevent => !prevent)
    console.log(setUseButton)
  }
  /*const styles = {
    backgroundColor: props.darkMode ? 'blue' : 'black'
  }style={{styles}}--darkMode={false}/>*/
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
          type='button' onClick={onToggle} className='btn--me'>
          {useButton ? "Name" : "Status"}
        </button>
      </div>
    </div>
  );
}