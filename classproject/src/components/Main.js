import React, {useState} from 'react'
//import $ from 'jquery'



/*$('#content').textWave({
  ratio: 2,
  repeat: 2,
  framerate: 60
});*/


export default function Main(props) {
  const [state, setState] = useState();

  /*function jqueryCode() {
    $('#content').textWave({
      text: 'My title wave Main.js',
      ratio: 2,
      repeat: 2,
      framerate: 60
    });
  }
  function componentDidMount() {
    jqueryCode()
  }
  componentDidMount()*/
  return (
    <div>
      <form>
        <span id="content"></span>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Your Name"
          required
        />
        <p>{state}</p>
      </form>
    </div>
  )
}