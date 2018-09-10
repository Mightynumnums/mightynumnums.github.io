import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import './styles/page.css'
import ScrollToTop from 'react-scroll-up'
import arrow from '../images/arrowUp.png'

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {
      showUnder: 0,
    }
  }

  //use this to ensure that the page view always starts off at the top of the page
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="main-content">
        <Navbar />
        {this.props.children}
        <ScrollToTop showUnder={100} duration={250} topPosition={0} style={{ transitionDuration: '.5s' }}>
          <span id='backToTop'><img id='arrowIcon' src={arrow} alt='arrow' /></span>
        </ScrollToTop>
        <Footer />
      </div >
    )
  }
}
