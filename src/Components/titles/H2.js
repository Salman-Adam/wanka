import React from 'react'
import './H2.css'
const H2 = (props) => {
  return (
    <div className='title'>
        <h2>{props.children}</h2>
    </div>
  )
}

export default H2