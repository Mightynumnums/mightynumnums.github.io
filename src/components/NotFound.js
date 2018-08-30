import React from 'react'
import './styles/notFound.css'
import ghost from '../images/lilGhost.png'

const NotFound = () => {
  return (
    <div className='notFoundPage'>
      <img src={ghost} alt='ghostFaceKilla' className='ghost' />
      <h1> Oh Uh!</h1>
      <h1 id='code'>404</h1>
      <h3>WHAT YOU WANT, WE DON'T GOT</h3>
      <h2>SORRY!!</h2>
    </div>
  )
}

export default NotFound