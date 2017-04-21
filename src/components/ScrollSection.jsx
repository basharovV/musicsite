import Menu from './Menu.jsx';
import React, { Component } from 'react';
import {Link as ScrollLink, Element, Events, animateScroll, scrollSpy} from 'react-scroll';
import Player from './Player.jsx';
import About from './About.jsx';
import Tracks from './Tracks.jsx';
import Contact from './Contact.jsx';

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

        <Router>
          <div className="App-menu-container">
            <div className="App-menu">

              <ul>
                <li><Link to="/">home</Link></li>
                <li>
                  <ScrollLink activeClass="App-section-active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <Link to="/#about">about</Link>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink activeClass="App-section-active" to="tracks" spy={true} smooth={true} offset={50} duration={500}>
                    <Link to="/#tracks">tracks</Link>
                </ScrollLink>
                </li>
                <li>
                  <ScrollLink activeClass="App-section-active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <Link to="/#contact">contact</Link>
                </ScrollLink>
                </li>
              </ul>
              <div className="App-divider"/>

              <Route path="/#about" component={About}/>
              <Route path="/#tracks" component={Tracks}/>
            <Route path="/#contact" component={Contact}/>

            </div>
          </div>
        </Router>

        <div id="about">
          <About/>
        </div>

        <div id="tracks">
          <Tracks/>
        </div>

        <div id="contact">
          <Contact/>
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
