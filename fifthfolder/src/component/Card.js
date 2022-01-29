import React from "react"

export default function Card(props) {
  return (
    <div className="div--myCard">
      <h3>
        id: {props.id}
      </h3>
      <p>
        name: {props.name}
      </p>
      <p>
        age: {props.age}
      </p>
    </div>
  )
};
