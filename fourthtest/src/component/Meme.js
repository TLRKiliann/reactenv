import React from "react"

export default function Meme() {
  //Set empty string by default
  const [memeImg, setMemeImg] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://logodix.com/logo/323319.jpg'
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImg() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImg(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
    e.preventDefault()
  }

  return (
    <div>
      <button onClick={getMemeImg} className="btn-meme"></button>
      <img src={memeImg.randomImage} className="img--conf" alt="img-meme" />
    </div>
  )
}