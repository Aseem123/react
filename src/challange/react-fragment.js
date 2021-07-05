import React from 'react'
import ReactDOM from 'react-dom'

const root = document.querySelector('#root')
ReactDOM.render(
  <React.Fragment>
    <h1>Important Notes</h1>
    <p>
      1. while using render we cannot use multiple element so we use div or
      React.fragment
    </p>
    <p>
      2. while using div to render more then 1 element it add additional div in
      html that can be problem while using flex or grid.
    </p>
    <p>
      3. React.fragment helps to obtain same result without adding additional
      div in html
    </p>
    <p>
      4. Even if we leave the opening and closing tag empty it will work as
      before
    </p>
  </React.Fragment>,
  root
)
