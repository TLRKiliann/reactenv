import React from 'react'

export default function Finalcount() {
  const [myApp, setMyApp] = React.useState()

  function clackTo() {
    setMyApp(prevent => !prevent)
  }
  return (
    <h3
      onClick={clackTo}
      style={{backgroundColor: myApp ? 'slateblue' : 'black'}}
      className='final--h'>
      {myApp ? 'violet':'black'}
    </h3>
  );
}