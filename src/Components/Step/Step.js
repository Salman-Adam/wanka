import React from 'react'
import './Step.css'
import img_onw from '../../Assest/img/undraw_svg_1.svg'
import {FaRegUserCircle, FaSignInAlt , } from 'react-icons/fa'
import {RiStarSLine } from 'react-icons/ri'
const Step = () => {
  return (
    <div className='Step'>
        <div className='container'>
            <div className='step-container'>
                <div className='step-img'>
                    <img src={img_onw} alt={img_onw} />
                </div>
                <div className='step-steps'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='step-num'>
                                <div className='step-content'>
                                    <h2>Sign Up</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                                </div>
                                <div className='step-icon'><span><FaSignInAlt/></span></div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='step-num'>
                                <div className='step-content'>
                                    <h2>Create Profile</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                                </div>
                                <div className='step-icon'><span><FaRegUserCircle/></span></div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='step-num'>
                                <div className='step-content'>
                                    <h2>Enjoy the app</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                                </div>
                                <div className='step-icon'><span><RiStarSLine/></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step