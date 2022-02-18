import React from 'react'
import dataToFired from './dataToFired'

export default function Lastwanted() {
  const [myLast, setMyLast] = React.useState(dataToFired)
  
  //To verify access on key into the data file. 
  //const truck = dataToFired
  //console.log(truck)


  function toggle() {
    setMyLast(dataToFired.map(prevLast => `${!prevLast.fidelity}`))
  }

  //Another manner to code :
  /*function callHost() {
    setMyLast(prevLast => {
      return [...prevLast, !prevLast.fidelity]
    })
  }*/

  /*
  const fidel = myLast.map(item => {
      return (
        <div>
          <p
            onClick={callHost}
            key={item.id}>{item.id} {item.name} : {item.fidelity ? 'yes ok' : 'no good'}
          </p>
        </div>
        )
      //item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
  })*/

  const fidel = myLast.map(item => {
    return ( 
      <p
        key={item.id}
        onClick={toggle}
      >
        {item.id} {item.name} {item.fidelity ? 'ok true' : 'no good'}
      </p>
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
    <div className='subdiv--lastwanted'>
      {fidel}
    </div>
  )
}

/*
{fidel && <p key={myLast.id}>{fidel[0]}</p>}
{fidel && <p key={myLast.id}>{fidel[1]}</p>}
{fidel && <p key={myLast.id}>{fidel[2]}</p>}
*/
