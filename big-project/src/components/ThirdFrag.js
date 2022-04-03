import React from 'react';
import {useState} from 'react';
import dataCatcher from '../dataStruct/dataCatcher';

function ThirdFrag() {
  const [items] = useState('Coucou');
  const [entry, setEntry] = useState('')
  const reach = dataCatcher.map(data => {
    return <h3 key={data.id}>{data.name}</h3>
  })
  const handleClick = (e) => {
    setEntry(e.target.value)
    console.log("ok test")
  }
  return (
    <div>
      <h2>ThirdOne</h2>
      <h3>{items}</h3>
      {reach}

      <form className='third--class'>
        <input 
          name='input' 
          type='text' 
          value={entry} 
          onChange={(e)=> setEntry(e.target.value)}>
          
        </input>
        <p>{entry}</p>
        <button type='button' onClick={handleClick}>Click</button>
      </form>
    </div>
  );
}

export default ThirdFrag;