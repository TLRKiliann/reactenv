import React from "react"

export default function Contact(props) {
  console.log(props);
  return (
      <div className="contact--card">
        <div className="main--div">
          <img src={props.img} className="img--size" alt="main img"/>
          <h3>{props.name}</h3>
        </div>
        <div className="contact--phone">
          <img src={props.imgphone} className="imgphone--size" alt="phone-logo"/>
          <p>{props.phone}</p>
        </div>
        <div className="contact--email">
          <img src={props.imgmail} className="imgmail--size" alt="email-logo"/>
          <p>{props.email}</p>
        </div>
      </div>
  )
};