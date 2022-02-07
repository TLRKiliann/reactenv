import React from 'react'

export default function Pass() {
  const [usePass, setUsePass] = React.useState(
    {
      Email: '',
      passwd: '',
      passwdConfirm: '',
      simpleQuiz: false
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
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
      console.log("Hurry go your simple quiz")
    }
    event.preventDefault()
  }
  return (
    <div className="main--pass">
      <form onSubmit={accessFunc}>
        <input
          type='email'
          placeholder="Email"
          onchange={handleChange}
          name='Email'
          value={usePass.email}
        />
        <input
          type='password'
          onchange={handleChange}
          placeholder="Password"
          name='passwd'
          value={usePass.passwd}
        />
        <input
          type='password'
          onchange={handleChange}
          placeholder='Confirm password'
          name='passwdConfirm'
          value={usePass.passwdConfirm}
        />
        <input
          type='checkbox'
          id="simple"
          onchange={handleChange}
          name='simpleQuiz'
          checked={usePass.simpleQuiz}
        />
        <label htmlFor="simple">
          I want to recieve newsletter ?
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}