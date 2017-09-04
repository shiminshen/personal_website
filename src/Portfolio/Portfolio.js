import React, { Component } from 'react';

import Project from './Project.js'

import './Portfolio.css'

class Portfolio extends Component {
  
  render() {

    let projects = [
      {
        name: 'Simmcloud',
        hashtags: ['jquery', 'react'],
        description: 'Simmcloud is a online stock backtest system which can help investors to revise their portfolio strategies.'
      }, {
        name: 'SimmChip',
        hashtags: ['react','redux'],
        description: ''
      }, {
        name: 'ChipRobot',
        hashtags: ['express', 'mongoDB'],
        description: ''
      }
    ]

    return (
      <div className='container' id='portfolio'>

        <div className="row">
          {
          projects.map( project => <Project key={project.name} {...project}/>)
          }
        </div>
      </div>
    );
  }
}

export default Portfolio;
