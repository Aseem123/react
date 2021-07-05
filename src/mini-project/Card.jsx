import React from 'react'

function Card(prop) {
  return (
    <>
      <div className="card" key={prop.key}>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${prop.src})` }}
        ></div>
        <div className="card-component">
          <p>A Netflix orginal series</p>
          <h3>{prop.movie}</h3>
          <a href={prop.link}>Watch Now</a>
        </div>
      </div>
    </>
  )
}

export { Card }
