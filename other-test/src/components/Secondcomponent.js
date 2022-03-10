import React from 'react'
//import { useState } from 'react'

function Secondcomponent(props) {

  //const [item, setItem] = useState(props)

  //setItem(prevItem => !prevItem);

  return (
    <React.Fragment>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.status}</p>
    </React.Fragment>
  );
};

export default Secondcomponent;
