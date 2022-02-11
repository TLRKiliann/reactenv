import React from 'react'

export default function Myfirst(props) {
  //const [useButt, setUseButt] = React.useState('');
  
  return (
    <div className='div--props'>
      {props.id && <h3>id = {props.id}</h3>}
      {props.name && <h3>name = {props.name}</h3>}
      {props.status && <h3>status = {props.status}</h3>}
      <button type='button' className='btn--me'>Click !</button>
    </div>
  );
}