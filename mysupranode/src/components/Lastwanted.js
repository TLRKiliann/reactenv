import React from 'react'
import dataToFired from './dataToFired'

export default function Lastwanted() {
  const [myFid, setmyFid] = React.useState(dataToFired)
  console.log(myFid);
  
  //To verify access on key into the data file. 

  //Another manner to code :
  /*function callHost() {
    setmyFid(prevLast => {
      return [...prevLast, !prevLast.fidelity]
    })
  }*/

  /*
  const fidel = myFid.map(item => {
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


  function toggle() {
    setmyFid(prevFidel => {
      return {
        ...prevFidel, fidelity: 'true'
      };
    })
  }

  /*
  function fidel() {

    return (
      <div>
        <p 
          key={myFid.id}
          onClick={toggle}
        >
          {myFid.id} {myFid.name} {myFid.age} {myFid.fidelity
            ? `ok ${myFid.fidelity}` : `no good ${myFid.fidelity}`}
        </p>
      </div>
      //item.fidelity ? `ok ${item.fidelity}` : `no good ${item.fidelity}`
      //item.fidelity ? `${item.name} ${entry}` : `${item.name} ${noentry}`)
    )
  }
  */

  //Or another manner :
  /*const fidel = myFid.map(item => {
    return (
      item.fidelity ? `ok ${item.fidelity}` : `no good ${item.fidelity}`
    )
  })*/

  //console.log('second', setMyLast)

  let fidel = myFid.map(item => {
    return (
      <p 
        key={item.id}
        onClick={toggle}
      >
        {item.id} {item.name} {item.age} {item.fidelity
          ? `ok ${item.fidelity}` : `no good ${item.fidelity}`}
      </p>
    )
  })

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
