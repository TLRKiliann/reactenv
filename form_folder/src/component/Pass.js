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
    //console.log(passForm)
    if (passForm.passwd === passForm.passConfirm) {
      console.log("Password is ok !")
    } else {
      console.log("No good password...")
      return //if passwd is false no newsletter...
    }

    if (passForm.newsLetter === true) {
      console.log("Thanks, you will recieve a newsletter")
      //submitToApi(passForm) --> Look at below
    }
    event.preventDefault()
  }

  //----------------------
  // With api & json file
  //----------------------

  /*handleSubmit = (event) => {
    alert('A form was submitted: ' + passForm);

    fetch('https://your-node-server-here.com/api/endpoint', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(passForm)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
  }*/

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
          required
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="pass--div"
          name="passwd"
          value={passForm.passwd}
          required
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Confirm password"
          className="pass--div"
          name="passConfirm"
          value={passForm.passConfirm}
          required
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

/*
submit loop
e
vent.preventDefault()

How to use value and state for passwd 
if (passForm.passwd === passForm.passConfirm) {

... => ({
  without return
})
return <></>
return (
  <></>
  )
return {
  ...object (no array) otherwise [...]
}

function handleChange(event) {
  const {name, type, value, checked} = event.target
  setPassform(prevent => ({
    ...prevPassForm,
    [name]: type === 'checkbox' ? checked : value
  }))
}

*/