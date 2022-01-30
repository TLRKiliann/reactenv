import React from "react"

export default function Card(props) {
  return (
    <div key={props.id} className="div--myCard">
      <img src={props.img} className="card--img" alt="my-img" />
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
