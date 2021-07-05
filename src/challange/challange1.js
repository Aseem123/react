import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const root = document.querySelector('#root')
ReactDOM.render(
  <React.Fragment>
    <h1>Top 5 web series of Netflix.</h1>
    <p>
      Note: This list is made on the base of rateing on IDBM not the personal
      list.
    </p>
    <ul>
      <li>1. Call My Agent!.</li>
      <li>2. The Crown.</li>
      <li>3. Orange is the New Black.</li>
      <li>4. Lupin.</li>
      <li>5. BoJack Horseman.</li>
    </ul>
  </React.Fragment>,
  root
)

// css
// h1 {
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #a82c2c;
// }
// ul li {
//   list-style: none;
//   font-size: 1.2rem;
// }
