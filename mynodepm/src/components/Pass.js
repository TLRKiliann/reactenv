import React from 'react'

export default function Pass() {
  const [usePass, setUsePass] = React.useState(
    {
      email: '',
      password: '',
      passwdConfirm: ''
    }
  )

  function handleChange(event) {
    const {name, value, type} = event.target
    setUsePass(prevPass => ({
      ...prevPass,
      [name]: value
    })
  }
  return (
    <div className="main--pass">
      <form>
        <input
          type='email'
          name='email'
          onchange={handleChange}
          value={usePass.email}
        />
        <input
          type='password'
          name='password'
          onchange={handleChange}
          value={usePass.password}
        />
        <input
          type='password'
          name='passwordConfirm'
          onchange={handleChange}
          value={usePass.passwdConfirm}
        />
      </form>
    </div>
  )
}