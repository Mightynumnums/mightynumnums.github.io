import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import './styles/page.css'

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
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
        <Footer />
      </div>
    )
  }
}
