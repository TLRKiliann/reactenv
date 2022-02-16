import React from 'react'
import dataToFired from './dataToFired'

export default function Lastwanted() {
  const [myLast, setMyLast] = React.useState(dataToFired)

  console.log(myLast)

  const entry = "--> yes ok"
  const noentry = "--> no good"

  const fidel = myLast.map(item => {
    return (
      item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
  })

  console.log(fidel)

  function callHost() {
    setMyLast(prevLast => !prevLast.fidelity)
  }

  return (
    <div className='subdiv--lastwanted'>
      <p onClick={callHost}>{fidel[0]}</p>
      <p>{fidel[1]}</p>
      <p>{fidel[2]}</p>
    </div>
  )
}
