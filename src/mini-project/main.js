import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from './Card'
import { data } from './array'
import './main.css'
const root = document.querySelector('#root')

ReactDOM.render(
  <>
    <div className="cards">
      {data.map((val) => {
        return (
          <Card src={val.src} movie={val.movie} link={val.link} key={val.key} />
        )
      })}
    </div>
  </>,
  root
)
