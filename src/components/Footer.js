import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import github from '../images/github.svg'
import mail from '../images/mail.svg'
import linked from '../images/linked2.svg'
import './styles/footer.css'

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className='footer-logos'>
          <Link to='/contacts'><img src={mail} className="logo" alt="logo" /></Link>
          <a href='https://github.com/Mightynumnums'><img src={github} className="logo" alt="logo" /></a>
          <a href='//www.linkedin.com/in/aleksandra-shineleva/'><img src={linked} className="logo" alt="logo" /></a>
        </div>
        <p id='copy'>&copy;Aleks Shineleva | 2018</p>
      </div>
    );
  }
}

