import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import github from '../images/github.png'
import mail from '../images/mail.png'
import linked from '../images/linkedIn.png'
import './styles/footer.css'

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className='footer-logos'>
          <Link to='/contacts'><img src={mail} className="logo" alt="envelope mail logo" /></Link>
          <a href='https://github.com/Mightynumnums'><img src={github} className="logo" alt="github logo" /></a>
          <a href='//www.linkedin.com/in/aleksandra-shineleva/'><img src={linked} className="logo" alt="linkedIn logo" /></a>
        </div>
        <p id='copy'>&copy;Aleks Shineleva | 2020</p>
      </div>
    );
  }
}

