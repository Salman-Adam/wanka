import React from 'react'
import './Buttons.css'
const GlobalButton = (props) => {
  return (
    <button className='GlobalButton'>{props.children}</button>
  )
}

export default GlobalButton