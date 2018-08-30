import React from 'react'
import hamburger from '../images/hamburgerIcon.png'
import './styles/hamburger.css'


const Hamburger = (props) => {

  return (
    <div className='hamburgerIcon' onClick={props.onClick}>
      <h6 className='menu'>MENU</h6>
      <img src={hamburger} alt='hamNavbar' className='hamburgerIcon' />
    </div>
  )
}

export default Hamburger