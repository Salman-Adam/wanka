import React from 'react'
import './Header.css'
import {GlobalButton} from '../index'
import img_phone1 from '../../Assest/img/phone_1.png'
import img_phone2 from '../../Assest/img/phone_2.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <section>
                <div className="row">
                    <div className='col-md-6'>
                        <div className='head-content'>
                            <h1>Promote Your App with SoftLand</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ex corporis velit .</p>
                            <div className='head-btn'>
                                <GlobalButton>Get Started</GlobalButton>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='head-img'>
                            <div>
                                <img src={img_phone1} alt={img_phone1}/>
                                <img src={img_phone2} alt={img_phone2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Header