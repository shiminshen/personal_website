import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap-grid.min.css'

import './App.css';

import Home from './Home'
import Work from './Work'
import Portfolio from './Portfolio'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <div className="wrapper row align-items-center">
            <ul className='sidebar col-4'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
            <div className='main col-8'>
              <Route exact path='/' component={Home}/>
              <Route exact path='/work' component={Work}/>
              <Route exact path='/portfolio' component={Portfolio}/>
            </div>
          </div>
        </div>
      </Router>
      );
  }
}

export default App;
