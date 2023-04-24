import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='footer-content'>
                            <h5>About WANO</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.</p>
                            <div className='social-links'>
                                <ul>
                                    <li><a href='/#'><FaFacebook /></a></li>
                                    <li><a href='/#'><FaTwitter /></a></li>
                                    <li><a href='/#'><FaInstagram /></a></li>
                                    <li><a href='/#'><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='footer-links'>
                            <h5>Navigation</h5>
                            <ul>
                                <li><a href='/#'>Pricing</a></li>
                                <li><a href='/#'>Features</a></li>
                                <li><a href='/#'>Blog</a></li>
                                <li><a href='/#'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footer-links'>
                            <h5>Services</h5>
                            <ul>
                                <li><a href='/#'>Team</a></li>
                                <li><a href='/#'>Collaboration</a></li>
                                <li><a href='/#'>Todos</a></li>
                                <li><a href='/#'>Events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footer-links'>
                            <h5>Downloads</h5>
                            <ul>
                                <li><a href='/#'>Google Play</a></li>
                                <li><a href='/#'>Apple Store</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyrights'>
                <span>© Copyright SoftLand. All Rights Reserved Designed by <a href='/#'>SALMAN</a></span>
            </div>
        </div>
    )
}

export default Footer