import React from "react"

export default function Card(props) {
  const [isShowPunch, setShowPunch] = React.useState("")

  function toggleFunc() {
    setShowPunch(prevshow => !prevshow)
  }

  function butt(toggleFunc, isShowPunch) {
    return (
      <button onClick={toggleFunc} className="btn--punch">
      {isShowPunch ? "Hide" : "Show"} me answer</button>
    )
  }

  const styles = {
    color: "yellow"
  }
  
  return (
    <div className="punch--div">
      {props.id && <p key={props.id}>id: {props.id}</p>}
      {props.name && <p>{props.name}</p>}
      {props.age && <p>{props.age}</p>}
      {props.status && <p>{props.status}</p>}
      {props.question && <p>Question: {props.question}</p>}
      {!isShowPunch && <p className="answer--p">Answer is masked press button</p>}
      {isShowPunch && <p className="pstyle" style={styles}>{props.punch}</p>}
      {butt(toggleFunc, isShowPunch)}
    </div>
  )
}