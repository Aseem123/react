import React from 'react'
import ReactDOM from 'react-dom'
const root = document.querySelector('#root')

const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()
const h1 = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#a82c2c',
}

ReactDOM.render(
  <React.Fragment>
    <h1 className="h1">Here is local date {`${date}`} </h1>
    <h1 className="h1">Here is local time {`${time}`} </h1>
  </React.Fragment>,
  root
)
