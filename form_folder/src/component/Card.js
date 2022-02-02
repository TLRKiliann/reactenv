import React from "react"
//import dataCard from './dataCard'

export default function Card(props) {
  const [isShowPunch, setShowPunch] = React.useState(false)

  function toggleFunc() {
    setShowPunch(prevshow => !prevshow)
  }

  function butt(toggleFunc, isShowPunch) {
    return (
      <button onClick={toggleFunc} className="btn--punch">
      {isShowPunch ? "Hide" : "Show"} me answer</button>
    )
  }

  return (
    <div className="punch--div">
      {props.question && <p key={props.id}>Question: {props.question}</p>}
      {isShowPunch && <p>{props.punch}</p>}
      {butt(toggleFunc, isShowPunch)}
    </div>
  )
}