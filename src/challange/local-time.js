import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Increment() {
  const time = new Date().toLocaleTimeString()
  const [currTime, setTime] = useState(time)
  const increase = () => setTime(time)

  return (
    <>
      <div>{currTime}</div>
      <button onClick={increase}>Click Me</button>
    </>
  )
}
ReactDOM.render(<Increment />, document.querySelector('#root'))
