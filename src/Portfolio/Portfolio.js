import React, { Component } from 'react';

import Project from './Project.js'

import './Portfolio.css'

class Portfolio extends Component {

  
  render() {
    return (
      <div id='portfolio'>
        <Project
          name='Simmcloud'
          hashtags={['jquery', 'react']}
        />
        <Project
          name='SimmChip'
          hashtags={['react', 'redux']}
        />
        <Project
          name='ChipRobot'
          hashtags={['express', 'MongoDB']}
        />
      </div>
    );
  }
}

export default Portfolio;
