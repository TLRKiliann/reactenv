import React from 'react'

export default function Pass() {
  const [usePass, setUsePass] = React.useState(
    {
      email: '',
      passwd: '',
      passwdConfirm: '',
      simpleQuiz: false
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    console.log(event.target.name)
    setUsePass(prevPass => ({
      ...prevPass,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function accessFunc(event) {
    if (usePass.passwd === usePass.passwdConfirm) {
      console.log("passwd is ok !")
    } else {
      console.log("passwd is no good !!!")
      return
    }

    if (usePass.simpleQuiz === true) {
      console.log("Hurry go your simple quiz !")
    }
    event.preventDefault()
  }

  return (
    <div className="main--pass">
      <form onSubmit={accessFunc}>
        <input
          type='email'
          placeholder="Email"
          onChange={handleChange}
          className="div--input"
          name='email'
          value={usePass.email}
        />
        <input
          type='password'
          onChange={handleChange}
          placeholder="Password"
          className="div--input"
          name='passwd'
          value={usePass.passwd}
        />
        <input
          type='password'
          onChange={handleChange}
          placeholder='Confirm password'
          className="div--input"
          name='passwdConfirm'
          value={usePass.passwdConfirm}
        />
        <input
          type='checkbox'
          id="simpleQuiz"
          onChange={handleChange}
          className="div--input"
          name='simpleQuiz'
          checked={usePass.simpleQuiz}
        />
        <label htmlFor="simpleQuiz">
          I want to recieve newsletter ?
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}