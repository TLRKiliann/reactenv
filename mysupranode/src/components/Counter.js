import React from 'react'

export default function Counter(props) {
  return (
    <h3>Click on me : {props.mycount ? 'click' : 'click (again)'}</h3>
  );
}