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
      <div>
        <h1>{name}</h1>
        {
        hashtags.map( hashtag => <span>{hashtag} </span> )
        }
      </div>
    );
  }
}

export default Project;
