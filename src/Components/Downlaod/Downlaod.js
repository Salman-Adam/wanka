import React from 'react'
import {SecoundButton} from '../index'
import img_one from '../../Assest/img/undraw_svg_2.svg'
import img_two from '../../Assest/img/undraw_svg_3.svg'
import './Downlaod.css'
const Downlaod = () => {
  return (
    <div className='Downlaod'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='downlaod-content'>
                        <h2>Seamlessly Communicate</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
                        <div><SecoundButton>Download Now</SecoundButton></div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='downlaod-img'>
                        <img src={img_one} alt={img_one}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='downlaod-img'>
                        <img src={img_two} alt={img_two}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='downlaod-content'>
                        <h2>Gather Feedback</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
                        <div><SecoundButton>Download Now</SecoundButton></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Downlaod