import React from 'react';


export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
      return <p>Water boils.</p>;
  }
  return <p>Water doesn't boil !</p>;
}