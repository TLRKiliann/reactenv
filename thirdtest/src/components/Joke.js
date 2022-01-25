import React from "react"

export default function Joke(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "OFFLine"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="div--joke">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img2} className="img--joke" alt="logo--joke" />
      <h3>Setup: {props.setup}</h3>
      <p>Punchline: {props.punchline}</p>
      <p>Up vote: {props.upvotes}</p>
      <p>Down vote: {props.downvotes}</p>
      <p>Author: {props.author}</p>
      <p>Age: {props.age}</p>
    </div>
  )
};