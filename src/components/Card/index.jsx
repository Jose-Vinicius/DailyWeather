import React from 'react'
import './style.scss'

export function Card({data, precipitation}) {

  return (
    <div className='card--select off'>
      <h1>{data}</h1>
      <img src="/weather__icons/sunny.svg" alt="" />
      <span>{precipitation}</span>
    </div>
  )
}
