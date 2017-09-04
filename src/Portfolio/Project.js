import React, { Component } from 'react';

class Project extends Component {

  
  render() {

    let {
      name,
      hashtags,
      srcUrl,
      description
    } = this.props;

    return (
      <div className='col-4'>
        <h1>
          <button 
            className='bttn-stretch bttn-lg'
          >{name}</button>
        </h1>
        {
        hashtags.map( hashtag => <span key={hashtag}>{hashtag} </span> )
        }
        <p>{description}</p>
      </div>
    );
  }
}

export default Project;
