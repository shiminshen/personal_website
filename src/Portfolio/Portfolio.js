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
        name: 'ChipMonitor',
        hashtags: ['react','redux'],
        description: 'ChipMonitor is a monitor of stock chip which can show the daily chip data of all brokers in each stock.'
      }, {
        name: 'ChipRobot',
        hashtags: ['express', 'mongoDB'],
        description: 'ChipRobot is a facebook chatbot which can response the users\' messanges.'
      }
    ]

    return (
      <div className='container-fluid' id='portfolio'>

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
