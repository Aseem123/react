import React, { useState } from 'react'

function Form() {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
    message: '',
  })
  const handleError = (e) => {
    e.preventDefault()
  }
  const data = (e) => {
    const { name, value } = e.target
    setFullName((previous) => {
      return {
        ...previous,
        [name]: value,
      }
    })

    // hardcore method or old method
    // const value = e.target.value
    // const names = e.target.name

    // setFullName((previous) => {
    //   if (names === 'fName') {
    //     return {
    //       fName: value,
    //       lName: previous.lName,
    //       message: previous.message,
    //     }
    //   } else if (names === 'lName') {
    //     return {
    //       fName: previous.fName,
    //       lName: value,
    //       message: previous.message,
    //     }
    //   } else {
    //     return {
    //       fName: previous.fName,
    //       lName: previous.lName,
    //       message: value,
    //     }
    //   }
    // })
  }
  return (
    <React.Fragment>
      <form onSubmit={handleError}>
        <div className="reverse">
          <input
            type="text"
            value={fullName.fName}
            name="fName"
            onChange={data}
          />
          <label>First Name</label>
        </div>
        <div className="reverse">
          <input
            type="text"
            value={fullName.lName}
            name="lName"
            onChange={data}
          />
          <label>Last Name</label>
        </div>
        <div className="reverse">
          <textarea
            name="message"
            value={fullName.message}
            onChange={data}
          ></textarea>
          <label>Message</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  )
}

export default Form
