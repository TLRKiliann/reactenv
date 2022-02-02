import React from "react"
import dataCard from './dataCard'

export default function Card() {
  const [isShowPunch, setShowPunch] = React.useState("")

  function toggleFunc() {
    setShowPunch(prevshow => !prevshow)
  }

  function butt(toggleFunc, isShowPunch) {
    return (
      <button onClick={toggleFunc} className="btn--punch">{!isShowPunch ? "Show" : "Hide"} me answer</button>
    )
  }

  const questAns = dataCard.map(item => {
    return (
      <div>
        <p>Question: {item.question}</p>
        {isShowPunch && <p>{item.punch}</p>}
        {butt(toggleFunc, isShowPunch)}
      </div>
    )
  })

  /*const answer = dataCard.map(item => {
    return (
      <p>Answer: {item.punch}</p>
    )
  })*/
  
  return (
      <div className="punch--div">
        {questAns}
      </div>
  )
}