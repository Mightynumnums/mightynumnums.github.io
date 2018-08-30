import React from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation';
import './styles/landingPage.css'


export default class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      doneTyping: false
    }
    this.finished = this.finished.bind(this)
  }

  finished() {
    this.setState({
      doneTyping: true
    })
  }

  render() {
    return (
      <div className="landing">
        <Typing onFinishedTyping={this.finished}>
          <div id='typing'>
            Oh, Hey! <br />
            <Typing.Delay ms={1000} />
            I'm so happy you're here!<br />
            <Typing.Delay ms={500} />
          </div>
        </Typing>
        {
          this.state.doneTyping
            ?
            <Link to={'/home'}><button id='main'> ENTER</button></Link>
            :
            null
        }

      </div>
    )
  }
}
