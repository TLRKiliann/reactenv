import React from "react"

export default function Joke(props) {
  return (
    <div className="div--joke">
      <img src={props.img2} className="img--joke" alt="logo--joke" />
      <h3>Setup: {props.setup}</h3>
      <p>Punchline: {props.punchline}</p>

      <p>Up vote: {props.upvotes}</p>
      <p>Down vote: {props.downvotes}</p>
      <p>Author: {props.comments}</p>
    </div>
  )
}