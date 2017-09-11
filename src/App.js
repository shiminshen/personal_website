import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import 'bootstrap/dist/css/bootstrap-grid.min.css'

import './App.css';

import Home from './Home'
import Work from './Work'
import Portfolio from './Portfolio'
import Contact from './Contact'


class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div className='App container-fluid'>
            <div className="wrapper row align-items-center">
              <ul className='sidebar col-4'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
              <TransitionGroup className='main col-8'>
                <CSSTransition
                  key={location.pathname}
                  classNames='change-route'
                  timeout={{ enter: 800, exit: 500 }}
                >
                  <Switch location={location}>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/work' component={Work}/>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/contact' component={Contact}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
          )}>
        </Route>
      </Router>
      );
  }
}

export default App;
