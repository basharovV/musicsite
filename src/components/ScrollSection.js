import Menu from './Menu.js';
import React, { Component } from 'react';
import {Link as ScrollLink, Element, Events, animateScroll, scrollSpy} from 'react-scroll';
import Player from './Player.js';
import About from './About.js';
import Tracks from './Tracks.js';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


export default class ScrollSection extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  scrollToBottom() {
    animateScroll.scrollToBottom();
  }

  scrollTo() {
    animateScroll.scrollTo(100);
  }

  scrollMore() {
    animateScroll.scrollMore(100);
  }

  handleSetActive(to) {
    console.log(to);
  }

  render() {
  	return (
      <div className="App-home-sections">

        <div className="App-header-bottom">
          <div className="App-title">
              Vyacheslav Basharov
          </div>
          <div className="App-subtitle">
                Composer
          </div>
          <br/>
          <div className="App-tagline">
            <p>Need music for your </p>
            <ul>
              <li>film?</li>
              <li>show?</li>
              <li>game?</li>
              <li>ad</li>
            </ul>
          </div>
        <br/>
        <Router>
          <div className="App-menu">

            <ul>
              <li><Link to="/">home</Link></li>
              <li>
                <ScrollLink activeClass="App-section-active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  <Link to="/#about">about</Link>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink activeClass="App-section-active" to="tracks" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
                  <Link to="/#tracks">tracks</Link>
              </ScrollLink>
              </li>
            </ul>
            <div className="App-divider"/>

            <Route path="/#about" component={About}/>
            <Route path="/#tracks" component={Tracks}/>

          </div>
        </Router>
      </div>

        <div id="about">
          <About/>
        </div>

        <div id="tracks">
          <Tracks/>
        </div>


         {/* <button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
           Contact
         </button>



         <Link to="firstInsideContainer" containerId="containerElement">
           Go to first element inside container
         </Link>

         <Link to="secondInsideContainer" containerId="containerElement">
           Go to second element inside container
         </Link>


         <div className="element" id="containerElement">
           <Element name="firstInsideContainer">
             first element inside container
           </Element>

           <Element name="secondInsideContainer">
             second element inside container
           </Element>
         </div> */}

        <a onClick={this.scrollToTop}>To the top!</a>
        <br/>
        <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
      </div>
	);
  }
}
