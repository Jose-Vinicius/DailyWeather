import React from 'react'
import './style.scss'

export function Card({data, precipitation, handleClass, id, cardClass}) {
  return (
    <div className={`card--select ${cardClass}`} onClick={handleClass} id={id}>
      <h1>{data}</h1>
      <img src="/weatherIcons/Sunny.svg" alt="" />
      <span>{precipitation} mm</span>
    </div>
  )
}
