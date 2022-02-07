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
    console.log(event.target)
    setUsePass(prevPass => ({
      ...prevPass,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function accessFunc(event) {
    if (usePass.mypasswd === usePass.mypasswdConfirm) {
      console.log("passwd is ok !")
    } else {
      console.log("passwd is no good !!!")
      return
    }

    if (usePass.mysimpleQuiz === true) {
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
          onchange={handleChange}
          className="div--pass"
          name='email'
          value={usePass.email}
        />
        <input
          type='password'
          onchange={handleChange}
          placeholder="Password"
          className="div--pass"
          name='passwd'
          value={usePass.passwd}
        />
        <input
          type='password'
          onchange={handleChange}
          placeholder='Confirm password'
          className="div--pass"
          name='passwdConfirm'
          value={usePass.passwdConfirm}
        />
        <input
          type='checkbox'
          id="simpleQuiz"
          onchange={handleChange}
          className="div--pass"
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