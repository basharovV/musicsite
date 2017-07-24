import React, { Component } from 'react';
import {Link as ScrollLink} from 'react-scroll';
import About from './About.jsx';
import Tracks from './Tracks.jsx';
import DemoReel from './DemoReel.jsx';
import Contact from './Contact.jsx';
import { NavBarIcon } from './Icons.jsx';
import { Route } from 'react-router-dom';
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
        <div className="App-menu">
          <div className="App-navbar-logo"><NavBarIcon/></div>
          <ul>
            <li>
              <ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                <Link to="/">home</Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="demoreel" spy={true} smooth={true} offset={50} duration={500}>
                <Link to="/#demoreel">demo reel</Link>
            </ScrollLink>
            </li>
            <li>
              <Link className="App-section-active" to="/tracks">tracks</Link>
            </li>
            <li>
              <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>
                <Link to="/#contact">contact</Link>
            </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/blog" spy={true} smooth={true} offset={50} duration={500}>
              <Link to="/blog">blog</Link>
            </ScrollLink>
            </li>
          </ul>
          <Route path="/#about" component={About}/>
          <Route path="/#demoreel" component={DemoReel}/>
          <Route path="/#tracks" component={Tracks}/>
          <Route path="/#contact" component={Contact}/>
        </div>
    )
  }
}
