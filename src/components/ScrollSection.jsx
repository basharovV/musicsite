import React, { Component } from 'react';
import {Events, animateScroll, scrollSpy} from 'react-scroll';
import About from './About.jsx';
import Tracks from './Tracks.jsx';
import DemoReel from './DemoReel.jsx';
import Contact from './Contact.jsx';
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
        {/* <Separator/> */}
        <div id="about">
          <About/>
        </div>
        <div>
        <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 C 50 100 80 100 100 0 Z" />
        </svg>
      </div>
        {/* <Separator/> */}
        <div id="demoreel">
          <DemoReel/>
        </div>
        <div id="tracks">
          <h2>Tracks</h2>
          <Tracks featured="true"/>
        </div>
        <div href="" className="App-all-tracks-button">
          <Link to="/tracks">All tracks</Link>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </div>
	);
  }
}
