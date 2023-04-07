import React from 'react'
// import Logo from '../../Assest/logo/untitled (1).png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        <Link to='/#' className='navbar-brand'>WANO</Link>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav ms-auto'>
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Features</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Pricing</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar