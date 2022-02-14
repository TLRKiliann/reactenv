import React from 'react'

export default function Counter(props) {
  return (
    <h3>Click on me : {props.count ? 'yes' : 'no'}</h3>
  );
}