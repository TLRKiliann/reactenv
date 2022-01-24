import React from "react"

export default function Joke(props) {
  return (
    <div className="div-joke">
      <h3>{props.setup}</h3>
      <p>{props.punchline}</p>
    </div>
  )
}