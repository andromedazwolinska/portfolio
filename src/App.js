import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
