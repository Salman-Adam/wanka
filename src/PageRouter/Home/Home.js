import React from 'react'
import './Home.css'
import {Header,Feat, Step, Downlaod, Review, Publishing} from '../../Components/index'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Feat/>
      <Step/>
      <Downlaod/>
      <Review/>
      <Publishing/>
    </div>
  )
}

export default Home