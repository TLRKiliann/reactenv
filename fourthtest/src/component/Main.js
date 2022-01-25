import React from "react"

export default function Main(props) {
  console.log(props);
  return (
    <div className="main--div">
      <div className="main--secdiv">
        <p>Name</p>
        <h3>{props.name}</h3>
      </div>
      <div className="main--secdiv">
        <p>Lastname</p>
        <h3>{props.lastname}</h3>
      </div>
      <div className="main--secdiv">
        <h3>Age: {props.age}</h3>
      </div>
    </div>
  )
};