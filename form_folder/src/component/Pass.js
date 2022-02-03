import React from "react"

export default function Pass() {
  const [passForm, setPassForm] = React.useState(
      email: "",
      passwd: "",
      passConfirm: "",
      newsLetter: ""
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setPassForm(prevPassForm => ({
      ...prevPassForm,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function acceptData(event) {
    event.preventDefault()
    console.log(passForm)
  }

  return (
    <div className="mainpass--div">
      <form onSubmit={acceptData}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={passForm.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="passwd"
          value={passForm.passwd}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="passConfirm"
          value={passForm.passConfirm}
        />
        <input
          id="newsLetter"
          type="checkbox"
          name="newsLetter"
          value={passForm.newsLetter}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}