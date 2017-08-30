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
            <h1>{name}</h1>
            <h3>{job}</h3>
            <h5>{`${startDate} ~ ${endDate}`}</h5>
            <a target='_blank' href={link}>Visit website</a>
          </div>
          <div className='col-6'>
            <a target='_blank' href={link}>
              <img src={imgSrc} height='200' width='200' alt='company'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
