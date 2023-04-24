import React from 'react'
import './Publishing.css'
import {FaApple,FaGooglePlay} from 'react-icons/fa'
const Publishing = () => {
  return (
    <div className='Publishing'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'><div className='Publishing-content'><h2>Starts Publishing Your Apps</h2></div></div>
                <div className='col-md-6'>
                    <div className='Publishing-icon'>
                        <a href='/#'><span><FaApple/></span>App store</a>
                        <a href='/#'><span><FaGooglePlay/></span>Google Pay</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Publishing