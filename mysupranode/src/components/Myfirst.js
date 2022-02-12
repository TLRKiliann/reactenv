import React from 'react'

export default function Myfirst(props) {
  const [useButton, setUseButton] = React.useState('');
  const [value, setValue] = React.useState('steelblue');
  const [usePos, setUsePos] = React.useState();
  
  function toggle() {
    setUseButton(prevent => !prevent)
    setValue(prevcolor => !prevcolor)
    setUsePos(prevpos => !prevpos)
  };

  return (
    <div className='div--overprops'>
      <div className='div--props'>
        <div className='div--subprops'>
          {props.id && <h4>{props.id}</h4>}
          {props.name && <h4>name = {props.name}</h4>}
          {props.status && <h4>status = {props.status}</h4>}
        </div>
        <div onChange={toggle} className='p--div' style={{transform: usePos ? 'rotateZ(360deg)' : '',
          transition: 'transform 300ms ease'}}>
          {!useButton && <p className="p--one">{props.name}</p>}
          {useButton && <p className="p--two">{props.status}</p>}
        </div>

        <button
          type='button'
          onClick={toggle}
          style={{transform: usePos ? 'rotateY(360deg)' : '',transition: 'transform 300ms ease'}}
          style2={{backgroundColor: value ? 'steelblue' : 'dodgerblue'}}
          className='btn--me'>
          {useButton ? "Name" : "Status"}
        </button>
      </div>
    </div>
  );
}