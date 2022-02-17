import React from 'react'
import dataToFired from './dataToFired'

export default function Lastwanted() {
  const [myLast, setMyLast] = React.useState(dataToFired)
  
  //To verify access on key into the data file. 
  //const truck = myLast.map(item => item)
  //console.log(truck)

  //Superficiel
  //const entry = "--> yes ok"
  //const noentry = "--> no good"

  function callHost() {
    setMyLast(prevLast => {
      return [...prevLast, !prevLast.fidelity]
    })
  }


  const fidel = myLast.map(item => {
    return (
      <p key={item.id}>{item.id} {item.name} : {item.fidelity ? "yes ok" : "no good"}</p>
      //item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
    )
  })
  
  //Or another manner :
  /*const fidel = myLast.map(item => {
    return (
      item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
  })*/

  //console.log('second', setMyLast)
  
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