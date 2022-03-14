import React from 'react'
//import { useState } from 'react'

function Secondcomponent(props) {

  //const [item, setItem] = useState(props)
  //setItem(prevItem => !prevItem);

  return (
    <div className='sec--class'>
      <p key={props.id}>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.status}</p>
    </div>
  );
};

export default Secondcomponent;
