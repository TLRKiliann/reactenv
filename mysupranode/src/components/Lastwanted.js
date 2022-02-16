import React from 'react'
import dataToFired from './dataToFired'

export default function Lastwanted() {
  const [myLast, setMyLast] = React.useState(dataToFired)

  /*const truck = myLast.map(item => item.fidelity)
  console.log(truck)*/

  const entry = "--> yes ok"
  const noentry = "--> no good"

  const fidel = myLast.map(item => {
    return (
      item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
  })

  //console.log(fidel)

  function callHost() {
    setMyLast(prevLast => !prevLast.fidelity)
  }

  return (
    <div onClick={callHost} className='subdiv--lastwanted'>
      {fidel && <p key={myLast.id}>{fidel[0]}</p>}
      {fidel && <p key={myLast.id}>{fidel[1]}</p>}
      {fidel && <p key={myLast.id}>{fidel[2]}</p>}
    </div>
  )
}
