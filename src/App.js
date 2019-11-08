import React, { Component } from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Contacts from './components/Contacts.js'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contacts' component={Contacts} />
          <Route exact={true} path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router >
    );
  }
}

export default App;
