import React from "react"

export default function Form() {
  const [docFormat, setDocFormat] = React.useState(
    {firstName: "", lastName: "", email: ""}
    )
  //const [firstName, setFirstName] = React.useState("")
  //const [lastName, setLastName] = React.useState("")

  //console.log(Firstname, Lastname)
  console.log(docFormat)


  function handleChange(event) {
    setDocFormat(prevDocFormat => {
      return {
        ...prevDocFormat,
        [event.target.name]: event.target.value
      }
    })
  }

  /*
  function changeFirstName(event) {
    setFirstName(event.target.value)
  }

  function changeLastName(event) {
    setLastName(event.target.value)
  }
  */
  /*
  return (
    <form>
      <input
        type="text"
        onChange={changeFirstName}
        className="first--input"
        placeholder="Firstname"
        name="Firstname"
      />
      <input
        type="text"
        onChange={changeLastName}
        className="last--input"
        placeholder="Lastname"
        name="Lastname"
      />
    </form>
  */
  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        className="first--input"
        placeholder="Firstname"
        name="firstName"
      />
      <input
        type="text"
        onChange={handleChange}
        className="last--input"
        placeholder="Lastname"
        name="lastName"
      />
      <input
        type="email"
        onChange={handleChange}
        className="last--input"
        placeholder="Email"
        name="email"
      />
    </form>
  )
}