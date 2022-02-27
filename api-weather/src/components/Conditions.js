import React from 'react';


function Conditions(props) {
  return (
    <div>
      {props.error && <small>Please enter a valid city.</small>}
      {props.loading && <div />}
      {props.responseObj.cod === 200 ?
        <div>
          <p><strong>{props.responseObj.name}</strong></p>
        </div>
        : null
      }
    </div>
  );
}
export default Conditions;

/*
          <p>It is currently {Math.round(props.responseObj.main.temp)} 
          degrees out with {props.responseObj.weather[0].description}.</p>
*/