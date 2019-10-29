import React from 'react'
import profilePic from '../images/aleksProfl.jpg'
import Page from './Page'
import './styles/home.css'

const Home = () => {
  return (
    <Page>
      <div className='bio'>
        <div className='bioText'>
          <h2>Welcome!!
            I'm so happy you've made it to my site!
            <br />
            My name is Aleks and I am a fullstack  software engineer with a keen eye for design.
          </h2>
          <p>
            An artist by nature and a web developer by training. Art and tech, for me, is a perfect union - two elements that fulfill and complement one another.
            <br />
            I love to learn new things, no matter how tough, and I love to teach others (no matter how tough).
            Generally, I like rolling up my sleeves and getting scrappy.
            I currently live, climb, and build apps in Brooklyn, New York.
          </p>
          <h3>Check out my projects or shoot me a message at the links above!</h3>
        </div>
        <div className='imageDiv'>
          <img src={ profilePic } id="profilePic" alt="selfImg" />
        </div>
      </div>
    </Page>
  );
}

export default Home
