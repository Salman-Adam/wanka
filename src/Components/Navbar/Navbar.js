import React from 'react'
// import Logo from '../../Assest/logo/untitled (1).png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        <Link to='/#' className='navbar-brand'>WANO</Link>
        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav'><span className='navbar-toggler-icon'></span></button>
        <div className='collapse navbar-collapse' id='nav'>
          <ul className='nav navbar-nav ms-auto'>
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/Features" className="nav-link">Features</Link></li>
                <li className="nav-item"><Link to="/Pricing" className="nav-link">Pricing</Link></li>
                <li className="nav-item"><Link to="/Blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/Contact Us" className="nav-link">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar