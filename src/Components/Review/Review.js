import React from 'react'
import { H2 } from '../index'
import './Review.css'
import userComments from '../../Data/userComments'
import { FaStar ,FaStarHalfAlt } from 'react-icons/fa'
const Review = () => {
  return (
    <div className='Review'>
      <div className='container'>
        <div className='review-container'>
          <H2>Review From Our Users</H2>
          <div className='comments'>
            <div className='row'>
              {userComments.map((p) => {
                return (
                  <div className='col-md-4'>
                    <div className='comment-container'>
                    <div className='rate'>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStarHalfAlt /></span>
                    </div>
                    <div className='comment-content'>
                      <h3>{p.commentTitle}</h3>
                      <p>{p.commen}</p>
                      <div className='comment-img'>
                        <img src={p.image} alt='kjji' />
                      </div>
                      <h4>{p.name} - App User</h4>
                    </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review 