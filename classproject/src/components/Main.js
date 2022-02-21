import React, {useState} from 'react'

export default function Main(props) {
  const [state, setState] = useState()
  return (
    <div>
      <form>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Your Name"
        />
        <p>{state}</p>
      </form>
    </div>
  )
}