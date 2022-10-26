import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const title = "DailyWeather"
document.title = title

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
)
