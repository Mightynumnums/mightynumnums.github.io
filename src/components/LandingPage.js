import React from 'react'
import './styles/landingPage.css'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation';


export default class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      doneTyping: false
    }
  }

  render() {
    return (
      <div className="landing">
        <Typing onFinishedTyping={() => this.setState({ doneTyping: true })}>
          <div>
            Hey there! I'm Aleks. <br />
            <Typing.Delay ms={1000} />
            It's nice to meet you! <br />
            <Typing.Delay ms={1000} />
            <br />
          </div>
        </Typing>

        {
          this.state.doneTyping
            ?
            <Link to={'/home'}><button id='main'>COME ON IN!</button></Link>
            :
            null
        }

      </div>
    )
  }
}
