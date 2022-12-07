import React from 'react'
import { WeatherCondition } from '../WeatherCondition'
import './style.scss'

export function Card({data, precipitation, handleClass, id, cardClass, weatherCondition}) {
  return (
    <div className={`card--select ${cardClass}`} onClick={handleClass} id={id}>
      <h1>{data}</h1>
      <WeatherCondition weatherCondition={weatherCondition}/>
      <span>{precipitation} mm</span>
    </div>
  )
}
