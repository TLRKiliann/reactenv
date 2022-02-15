import React from 'react'

export default function Mostwanted() {
  const [mostUse, setMostUse] = React.useState(
    {
      truc: false
    }
  )

  const toChange = mostUse.truc ? 'problem' : 'ok'

  function callMost() {
    setMostUse(prevMost => {
      return {
        ...prevMost,
        truc: !prevMost.truc
      }
    })
  }

  //const searchThing = mostUse.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div className='most--div'>
      <button onClick={callMost}>Click it</button>
      {toChange}
    </div>
  );
}