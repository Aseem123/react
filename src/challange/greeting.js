import React from 'react'
import ReactDOM from 'react-dom'
import './challange3.css'
import morning from './morning.jpg'
import afternoon from './afternoon.jpg'
import night from './night.jpg'

const root = document.querySelector('#root')
const hour = new Date().getHours()
const min = new Date().getMinutes()
ReactDOM.render(
  <React.Fragment>
    <section>
      <div className="black"></div>
      <div className="center">
        <div className="first">
          <h1>{`${hour}:${min}`}</h1>
          <h4>
            <span>Good Morning,</span> Aseem
          </h4>
        </div>
        <div className="last">
          <h4>Today</h4>
          <p>Ignore everyone and smile😊</p>
        </div>
      </div>
    </section>
  </React.Fragment>,
  root
)

function color(hour) {
  const span = document.querySelector('span')
  const section = document.querySelector('section')
  if (hour >= 1 && hour <= 12) {
    span.textContent = 'Good Morning,'
    span.style.color = '#51c751'
    section.style.backgroundImage = `url(${morning})`
  } else if (hour >= 12 && hour <= 19) {
    span.textContent = 'Good Afternoon,'
    span.style.color = '#51c751'
    section.style.backgroundImage = `url(${afternoon})`
  } else {
    span.textContent = 'Good Night,'
    span.style.color = '#51c751'
    section.style.backgroundImage = `url(${night})`
  }
}

color(hour)
