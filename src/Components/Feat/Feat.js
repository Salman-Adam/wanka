import React from 'react'
import './Feat.css'
import {FaChartLine, FaCogs, FaUsers} from 'react-icons/fa'
import H2 from '../titles/H2'
const Feat = () => {
  return (
    <div className='Feat'>
        <div className='container'>
            <div className='feat-container'>
                <div className='feat-title'>
                    <H2>Save your time to using SoftLand</H2>
                </div>
                <div className='feat-content'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='feat-content-card'>
                                <div>
                                    <h3>Explore Your Team</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                                </div>
                                <div className='feat-icon'><span><FaUsers/></span></div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='feat-content-card'>
                                <div>
                                    <h3>Digital Whiteboard</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                                </div>
                                <div className='feat-icon'><span><FaCogs/></span></div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='feat-content-card'>
                                <div>
                                    <h3>Design To Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                                </div>
                                <div className='feat-icon'><span><FaChartLine/></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feat