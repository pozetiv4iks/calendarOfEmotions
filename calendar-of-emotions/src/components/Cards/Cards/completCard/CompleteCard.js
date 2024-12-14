import React from 'react'

export default function CompleteCard({id, description, duration, cost, questDay }) {
  return (
    <div>
      <div>CompleteCard</div>
      <div className="quest-day-card"> 
        <h2>{id}</h2> 
        <p>{description}</p> 
      </div>
    </div>
  )
}
