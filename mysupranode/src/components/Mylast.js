import React from 'react'
import dataMyfirst from './dataMyfirst'

export default function Mylast() {
  const lastone = "Number of Persons : ";
  const persNum = dataMyfirst.length;

  const perVar = dataMyfirst.map(item => {
    return item.id + ' ' + item.name + ' ' + item.status
  });
  const newVar = perVar.join(' - ')

  return (
    <div className='main--lastco'>
      <div className='div--lastco'>
        <h3>Mylast.js</h3>
        <h3>{lastone} {persNum}</h3>
        <div className='div--newvar'>
          <p className='tag--p'>
            All names : {newVar}
          </p>
        </div>
      </div>
    </div>
  );
}