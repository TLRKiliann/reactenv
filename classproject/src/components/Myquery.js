import React from 'react'

//import 'jquery'
//import $ from 'jquery'

//&nbsp; is equal to <pre> </pre> for blanc space.
export default function Myquery(){
  //$(document).ready(function(){
    //$('.letters').textWave()
  //})
  // Wrap every letter in a span
  return (
    <React.Fragment>
      <div className='loader'>
        <h1 className="loader--title">Some style</h1>
          <span className="back">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </span>
      </div>
      <div className="sign">
        <span className="fast-flicker">React like</span>
        <span className="flicker">&nbsp;a game</span>
      </div>
      <div className="stage">
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
        <p className="layer"></p>
      </div>
      <div className='scss--styles'>
        LUMINESCENCE
      </div>
    </React.Fragment>
  );
}
