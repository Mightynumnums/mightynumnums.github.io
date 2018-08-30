import React from 'react'
import profilePic from '../images/aleksProfl.jpg'
import Page from './Page'
import './styles/home.css'

const Home = () => {
  return (
    <Page>
      <div className='bio'>
        <div className='bioText'>
          <h2>Welcome!
            I'm so happy you made it to my site!</h2>
          <h3>My name is Aleks and I am a fullstack  software engineer with a keen eye for design.</h3>
          <p>I am an artist by nature and a web developer by training. Art and tech, for me, is a perfect union,- two elements that fulfill and complement one another.
          I love to learn new things, no matter how tough, and I love to teach others (no matter how tough).
          Generally, I like rolling up my sleeves and getting scrappy.
          I currently live, climb, and build apps in Brooklyn, New York.
            </p>
          <h4>Check out my projects or shoot me a message at the links above!</h4>
        </div>
        <div className='imageDiv'>
          <img src={profilePic} id="profilePic" alt="selfImg" />
        </div>
      </div>
    </Page>
  );
}

export default Home
