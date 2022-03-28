import React from 'react'


export default function Mostwanted() {
  const [mostUse, setMostUse] = React.useState(['One more time... Thing 1'])
  //console.log(mostUse)

  const varThing = mostUse.map(thing => <p key={thing}>{thing}</p>)

  function callMost() {
    setMostUse(prevent => {
      return [...prevent, `Thing ${prevent.length + 1}`]
    })
  }

  return (
    <div className='most--div'>
      <button style={{margin: '10px 10px', padding: '10px 10px'}} onClick={callMost}>Click it</button>
      {varThing}
    </div>
  );
}

/*
  function callMost() {
    setMostUse(prevent => {
      return [...prevent, `Thing ${prevent.length + 1}`]
    })
  }
*/