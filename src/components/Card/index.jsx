import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './style.scss'

export function Card({data, precipitation, handleClass, id}) {
  return (
    <div className={`card--select`} onClick={handleClass} id={id}>
      <h1>{data}</h1>
      <img src="/weatherIcons/sunny.svg" alt="" />
      <span>{precipitation} mm</span>
    </div>
  )
}
