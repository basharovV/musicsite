import React, {Component} from 'react';
import {FaSoundcloud, FaVimeo, FaGithub} from 'react-icons/lib/fa';
import {Events, animateScroll, scrollSpy} from 'react-scroll';

class Footer extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  render() {
    return (
      <div className="App-footer">
        <ul>
          <li>
            <a onClick={this.scrollToTop}>To the top!</a>
          </li>
          <li>© 2017 Vyacheslav Basharov</li>
          <li style={{
            color: '#b63c00'
          }}><FaSoundcloud/>
            <b><a href="https://soundcloud.com/vbash"> Soundcloud</a></b>
          </li>
          <li style={{
            color: '#005fb6'
          }}><FaVimeo/>
            <b><a href="https://vimeo.com/vbash"> Vimeo</a></b>
          </li>
          <li style={{'font-size': '0.8em'}}>Website by Vyacheslav Basharov. Check out the code on
            <a style={{color: '#bfbfbf'}}> <FaGithub/> Github</a>
          </li>
        </ul>
        <span>
          <b></b>
        </span>
      </div>
    );
  }
}

export default Footer;
