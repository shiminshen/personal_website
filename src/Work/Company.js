import React, { Component } from 'react';

import './Company.css'

class Company extends Component {

  render() {

    let {
      name,
      job,
      startDate,
      endDate,
      link,
      imgSrc
    } = this.props;

    return (
      <div className='company container'>
        <div className='row'>
          <div className='col-6'>
            <h2>{name}</h2>
            <h4>{job}</h4>
            <h6>{`${startDate} ~ ${endDate}`}</h6>
            <a target='_blank' href={link}>Visit website</a>
          </div>
          <div className='col-6'>
            <img src={imgSrc} height='200' width='200' alt='company'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
