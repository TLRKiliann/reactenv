import React from 'react';
import {useState} from 'react';
//import {useEffect} from 'react';
import dataCatcher from '../dataStruct/dataCatcher';


function ThirdFrag() {
  const [items] = useState('Coucou');
  const [entry, setEntry] = useState('')
  const reach = dataCatcher.map(data => {
    return <h3 key={data.id}>{data.name}</h3>
  })
  const handleChange = (e) => {
    setEntry(e.target.value)
    console.log("ok test")
  }
  /*
  useEffect(() => {
    localStorage.setItem('entry', JSON.stringify(entry));
  }, [entry])
  */
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
          onChange={(e)=> setEntry(e.target.value)}
        >
        </input>

        <input 
          name='input2' 
          type='text' 
          value={entry}
          onChange={handleChange}
        >
        </input>

        <p>{entry}</p>
        <button type='button' onClick={handleChange}>Click</button>
      </form>
    </div>
  );
}

export default ThirdFrag;