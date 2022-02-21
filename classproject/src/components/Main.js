import React, {useState} from 'react'

export default function Main(props) {
  const [state, setState] = useState()
  const changeName = () => {
    setState(prevState => !prevState);
  }
  return (
    <div className='div--main'>
      <p>Love me or love you ? : {state ? 'Me' : 'You'}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  )
}