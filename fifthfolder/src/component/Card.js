import React from "react"

export default function Card(props) {
  return (
    <div className="div--myCard">
      <h3 key={id}>
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
