import React from "react"

export default function Meme() {
  //Set empty string by default
  const [memeImg, setmemeImg] = React.useState("") 

  function getMemeImg() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setmemeImg(memesArray(randomNumber).url)
    e.preventDefault()
  }

  return (
    <div>
      <img src={memeImg} className="img--conf" alt="img-meme" />
      <button onClick={getMemeImg} className="btn-meme"></button>
    </div>
  )
}