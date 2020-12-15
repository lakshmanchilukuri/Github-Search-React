import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className="navbar bg-primary text-light">
      <div>
      <i className="fab fa-github fa-2x"></i>
      <span className="ml-2">Github Finder</span>
      </div>
      <div>    
      <Link to="/" className="text-light m-2">Home</Link>
      <Link to="/about" className="text-light m-2">About</Link>
      </div>

    </div>
  )
}

export default Navbar
