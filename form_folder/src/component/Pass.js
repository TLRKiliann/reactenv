import React from "react"

export default function Pass() {
  const [passForm, setPassForm] = React.useState(
    {
      email: "",
      passwd: "",
      passConfirm: "",
      newsLetter: false
    }
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
    //console.log(passForm)
    if (passForm.passwd === passForm.passConfirm) {
      console.log("Password is ok !")
    } else {
      console.log("No good password...")
      return //avoid newsletter if passwd is false...
    }
    //That's fun, but it's like that...
    if (passForm.newsLetter === true) {
      console.log("Thanks, you will recieve a newsletter")
      //submitToApi(passForm)
    }
  }

  return (
    <div className="mainpass--div">
      <form onSubmit={acceptData}>
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="pass--div"
          name="email"
          value={passForm.email}
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="pass--div"
          name="passwd"
          value={passForm.passwd}
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Confirm password"
          className="pass--div"
          name="passConfirm"
          value={passForm.passConfirm}
        />
        <div className="div--news">
          <input
            id="newsLetter"
            type="checkbox"
            onChange={handleChange}
            className="pass--div"
            name="newsLetter"
            checked={passForm.newsLetter}
          />
          <label htmlFor="newsLetter" className="pass--div">
            I want to recieve newsletter ?
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}