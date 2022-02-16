import React from 'react'
import dataToFired from './dataToFired'

export default function Lastwanted() {
  const [myLast, setMyLast] = React.useState(dataToFired)
  
  //To verify access on key into the data file. 
  /*const truck = myLast.map(item => item.fidelity)
  console.log(truck)*/

  //Superficiel
  //const entry = "--> yes ok"
  //const noentry = "--> no good"

  const fidel = myLast.map(item => {
    return (
      <p key={item}>{item.name} : {item.fidelity ? "yes ok" : "no good"}</p>
    )
  })
  
  //Or another manner :
  /*const fidel = myLast.map(item => {
    return (
      item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
  })*/

  function callHost() {
    setMyLast(prevLast => {
    return (
        [...prevLast, !prevLast.fidelity]
      )
    })
  }

  console.log('second', setMyLast)
  return (
    <div onClick={callHost} className='subdiv--lastwanted'>
      {fidel}
    </div>
  )
}

/*
{fidel && <p key={myLast.id}>{fidel[0]}</p>}
{fidel && <p key={myLast.id}>{fidel[1]}</p>}
{fidel && <p key={myLast.id}>{fidel[2]}</p>}
*/