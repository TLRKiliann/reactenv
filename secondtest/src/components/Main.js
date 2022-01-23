import React from "react"

export default function Main() {
  const name = "ko@l@tr33";
  const lastname = "Test";
  const date = new Date();
  const hours = date.getHours() % 12;
  const min = date.getMinutes();

  return (
        <div>
          <div className="card-name">
            <h2>
              My main text Name : {name}; Lastname : {lastname}
            </h2>
          </div>
          <h2>
            Time is {hours}h: {min}min
          </h2>
          <img src="../images/somepic.png" className="card--img" alt="img" />
        </div>
  )
};
