import React from 'react';
import dataCatcher from '../dataStruct/dataCatcher';


function SecondFrag() {
  const dataSec = dataCatcher.map(item => {
    return <h3 key={item.id}>{item.id} {item.name} {item.age}</h3>;
  })
  return (
    <div>
      <h2>SecondOne</h2>
      {dataSec}
    </div>
  );
}

export default SecondFrag;