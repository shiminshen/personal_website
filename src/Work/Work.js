import React, { Component } from 'react';

import Company from './Company.js'

import './Work.css'

class Work extends Component {

  render() {
    return (
      <div id='work'>
        <Company 
          name='Simmcloud'
          job='Front-end engineer'
          startDate={'July 2015'}
          endDate={'July 2017'}
          link='http://www.simmcloud.com/'
          imgSrc='http://www.simmcloud.com/assets/css/images/Index/logo-1160x1160.png'
        />
      </div>
    );
  }
}

export default Work;
