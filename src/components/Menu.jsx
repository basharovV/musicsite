import React, { Component } from 'react';
import {Link as ScrollLink, Element, Events, animateScroll, scrollSpy} from 'react-scroll';
import Player from './Player.jsx';
import About from './About.jsx';
import Tracks from './Tracks.jsx';
import DemoReel from './DemoReel.jsx';
import Contact from './Contact.jsx';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      focused: 0
    }
  }

  click(index) {
    this.setState({focused: index})
  }

  render() {
    return (
      <div className="App-menu-container">
        <div className="App-menu">

          <ul>
            <li>
              <ScrollLink activeClass="App-section-active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                <Link to="/#about">about</Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink activeClass="App-section-active" to="demoreel" spy={true} smooth={true} offset={50} duration={500}>
                <Link to="/#demoreel">demo reel</Link>
            </ScrollLink>
            </li>
            <li>
              <Link className="App-section-active" to="/tracks">tracks</Link>
            </li>
            <li>
              <ScrollLink activeClass="App-section-active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                <Link to="/#contact">contact</Link>
            </ScrollLink>
            </li>
            <li>
              <Link className="App-section-active" to="/blog">Blog</Link>
            </li>
          </ul>
          <div className="App-divider"/>

          <Route path="/#about" component={About}/>
          <Route path="/#demoreel" component={DemoReel}/>
          <Route path="/#tracks" component={Tracks}/>
          <Route path="/#contact" component={Contact}/>

        </div>
      </div>
    )
  }
}
