import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
import Hamburger from '../components/Hamburger.js'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      lastScrollY: 0,
      hidden: false,
      collapsed: true
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      this.setState({ hidden: true })
    } else if (currentScrollY < 100) {
      this.setState({ hidden: false })
    }
  }


  render() {
    let className = 'navigate';
    if (this.state.hidden) className += ' hidden';
    if (this.state.collapsed) className += ' collapsed';

    return (
      <nav>
        <Hamburger onClick={this.toggleNav} collapsed={this.state.collapsed} />
        <ul className={className} id='navbar'>
          <li id='home'><NavLink to='/home'>HOME</NavLink></li>
          <li id='projects'><NavLink to='/projects'>PROJECTS</NavLink></li>
          <li id='resume'><NavLink to='/resume'>RESUME</NavLink></li>
          <li id='contacts'><NavLink to='/contacts'>CONTACTS</NavLink></li>
        </ul>
      </nav>

    )
  }
}


