import React from 'react';
//import * as axios from 'axios';
import datares from './dataResponse';

export default function Primaryaxios() {
  const mapping = datares.map(item => {
    return (
      <ul  className='class--retrive'>
        <li>title={item.title}</li>
        <li className='url--class'>url={item.url}</li>
      </ul>
    )
  })
  return (
    <div>
      <h3 className='title--class'>The Last News !</h3>
      {mapping}
    </div>
  )
}

