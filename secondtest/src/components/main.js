import React from "react"

export default function Main() {
    const name = "ko@l@tr33"
    const lastname = "Test"
    const date = new Date()
    const hours = date.getHours() % 12
    const min = date.getMinutes()

    return (
          <div>
            <h2>
              My main text Name : {name}; Lastname : {lastname}
            </h2>
            <h2>
              Time is {hours}h: {min}min
            </h2>
          </div>
    )
};