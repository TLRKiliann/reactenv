import React from "react"
import numberCard from "./numberCard"

export default function Card(props) {
  return (
    <div className="div--myCard">
      <h3>
        id: {props.id}
      </h3>
    </div>
  )
};
