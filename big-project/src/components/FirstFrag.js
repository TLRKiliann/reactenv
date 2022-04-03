import React from 'react';


function FirstFrag(props) {
  return (
    <div className='first--class'>
      <h2>With PROPS</h2>
      <h2 key={props.id}>{props.id}</h2>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.admin ? "admin" : "member"}</h2>
    </div>
  );
}

export default FirstFrag;