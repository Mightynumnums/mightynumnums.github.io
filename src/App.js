import React, { Component } from 'react';
import './App.css';
//import github from './images/github.svg'
import Footer from './components/Footer.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <p>this will be a navbar</p>
        </header>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
