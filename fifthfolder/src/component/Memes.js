import React from "react"
import memesData from "./memesData"

export default function Memes() {
  const allData = memesData.map(item => {
    return (
      <div key={item.id} className="div--item">
        {item.id && <p>id: {item.id}</p>}
        <img src={item.img} className="item--img" alt='' />
        <p>
          name: {item.name}
        </p> 
        <p>
          age: {item.age}
        </p>
      </div>
    )
  })
  return allData;
};
