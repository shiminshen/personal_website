import React, { Component } from 'react';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


import './Home.css'

class Home extends Component {

  constructor(props) {
    super(props);
  
    this.slogans = ['websites.', 'web applications.', 'user interfaces.', 'life.']
    this.state = {
      typing: true,
      sloganIdx: 0
    };

  }

  changeSlogan = () => {
    let {
      sloganIdx
    } = this.state;

    setTimeout(() => {
      this.setState({ typing: false }, () => {
        this.setState({
          typing: true, 
          sloganIdx: ++sloganIdx > this.slogans.length - 1 ? 0 : sloganIdx
        })
      })
    }, 3000)

  }

  render() {
    let {
      typing,
      sloganIdx
    } = this.state;

    return (
      <div id='home'>
        <div className='greet'>
          <p> Hi, </p>
          <p> I'm Damon, </p>
          <span>I design </span>
          {
          typing ? 
          <Typist
            className='typist'
            startDelay={300}
            onTypingDone={this.changeSlogan}
          > 
            {this.slogans[sloganIdx]}
          </Typist>
          : this.slogans[sloganIdx]
          }
        </div>

      </div>
    );
}
}

export default Home;
