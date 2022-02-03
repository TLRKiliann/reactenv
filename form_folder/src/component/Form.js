import React from "react"

export default function Form() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: ""
    })

  console.log(formData)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        //[event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function handleSubmit() {
    alert("Everythings have been saved")
    //submitToApi(formData)
  }
  return (
    //<form method="POST" action="phpfile.php">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        className="first--input"
        placeholder="Firstname"
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleChange}
        className="last--input"
        placeholder="Lastname"
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        onChange={handleChange}
        className="last--input"
        placeholder="Email"
        name="email"
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        onChange={handleChange}
        placeholder="Comments"
        name="comments"
      />
      <div className="input--lab">
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label
          htmlFor="isFriendly">Are you ok?
        </label>
      </div>
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          chacked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          chacked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          chacked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <br />
      <br />
      <div className="form--select">
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">--Choose--</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
      </div>
      <br />
      <br />
      <button type="submit">Submit</button>

    </form>
  )
}
  /*
  //const [firstName, setFirstName] = React.useState("")
  //const [lastName, setLastName] = React.useState("")

  //console.log(Firstname, Lastname)

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