import React from 'react';
import LittleWin from './LittleWin';

function MainWin() {
  return (
    <div className='main--class'>
      <h3>Const html : {html}</h3>

      <textarea id='editor'>{(e) => setEdit(e.target.value)}</textarea>

      <p id='preview' value='elem' onChange{handleChange}></p>

      <h1>title</h1>
      
      <h2>sub-title</h2>

      <a href='#'></a>

      <p>```bloc de code ???```</p>

      <li></li>

      <p>`cita en bloc ???`</p>

      <img src='' alt='' />

      <p>
        <strong>
          Bold
        </strong>
      </p>
      <LittleWin />
    </div>
  );
}
