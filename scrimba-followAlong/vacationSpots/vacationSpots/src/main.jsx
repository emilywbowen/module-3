import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App'
import './index.css'
import VacationList from './components/VacationList'
import VacationPost from './components/VacationPost'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <VacationList />
    <VacationPost />
  </React.StrictMode>,
)
