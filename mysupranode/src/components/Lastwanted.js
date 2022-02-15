import React from 'react'

export default function Lastwanted() {
  const [myLast, setMyLast] = React.useState(
    {
      name: 'Aurélien',
      age: 42
    }
  )

  function callHost() {
    setMyLast(prevLast => {
      return {
        ...prevLast,
        name: !prevLast.name}
    })
  }

  return (
    <div className='subdiv--lastwanted'>
      <p onClick={callHost}>{myLast}</p>
    </div>
  )
}
