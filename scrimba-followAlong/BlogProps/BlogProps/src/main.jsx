import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BlogList from './components/BlogList.jsx'
import BlogPost from './components/BlogPost.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    {/* <Navbar /> */}
    <Header />
    <BlogPost />
    <BlogList />
  </React.StrictMode>,
)
