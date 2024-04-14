import React from 'react'
import ReactDOM from 'react-dom/client'
// import friendData from './components/friendData.jsx'
import FriendList from './components/FriendList.jsx'
import Pet from './components/Pet.jsx'
import Friend from './components/Friend.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Friend />
    <Pet />
    <FriendList />
  </React.StrictMode>,
)
