import React from "react"

export default function Contact(props) {
  console.log(props);
  return (
      <div className="contact--card">
        <img src={props.img} />
        <h3>{props.name}</h3>
        <div className="contact--phone">
          <img src="./images/phone.png" />
          <p>{props.phone}</p>
        </div>
        <div className="contact--email">
          <img src="./images/email.png" />
          <p>{props.email}</p>
        </div>
      </div>
  )
};