import React, { Component } from 'react';
import SineWaves from 'sine-waves';
import AppIcon from './Icons.jsx';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  componentDidMount() {
    var waves = new SineWaves({
    // Canvas Element
    el: document.getElementById('waves'),

    // General speed of entire wave system
    speed: 5,

    // How many degress should we rotate all of the waves
    rotate: 0,

    // Ease function from left to right
    ease: 'SineInOut',

    // Specific how much the width of the canvas the waves should be
    // This can either be a number or a percent
    waveWidth: '100%',

    // An array of wave options
    waves: [
      // {
      //   timeModifier: 0.6,   // This is multiplied againse `speed`
      //   lineWidth: 1,      // Stroke width
      //   amplitude: 70,    // How tall is the wave
      //   wavelength: 20,   // How long is the wave
      //   segmentLength: 30, // How smooth should the line be
      //   strokeStyle: 'rgba(24, 105, 110, 0.5)', // Stroke color and opacity
      //   type: function(x, waves) {
      //     return Math.sin(x / 2 * 3.14159) * (waves.sawtooth(x / 2 *3.14159)); // Combine two together
      //   }      // Wave type
      // },
      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: 70,
        wavelength: 60,
        strokeStyle: 'rgba(32, 255, 74, 0.68)',
        type: 'sine'       // Wave type
      },
      {
        timeModifier: 0.7,
        lineWidth: 0,
        amplitude: 30,
        wavelength: 30,
        strokeStyle: 'rgba(0, 157, 199, 0.65)'
      }
    ],

    // Perform any additional initializations here
    initialize: function (){},

    // This function is called whenver the window is resized
    resizeEvent: function() {

      // Here is an example on how to create a gradient stroke
      var gradientA = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradientA.addColorStop(0.3,"rgba(24, 80, 62, 1)");
      gradientA.addColorStop(0.5,"rgba(244, 244, 244, 1)");
      gradientA.addColorStop(0.7,"rgba(58, 81, 124, 1)");
      var gradientB = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradientB.addColorStop(0.3,"rgba(128, 148, 31, 1)");
      gradientB.addColorStop(0.5,"rgba(204, 4, 4, 0.5)");
      gradientB.addColorStop(0.8,"rgba(18, 69, 163, 1)");
      var gradientC = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradientC.addColorStop(0.3,"rgba(38, 65, 128, 0.3)");
      gradientC.addColorStop(0.5,"rgba(25, 161, 140, 0.5)");
      gradientC.addColorStop(0.7,"rgba(52, 24, 111, 0.2)");

      // this.waves[0].strokeStyle = gradientA;
      this.waves[0].strokeStyle = gradientB;
      this.waves[1].strokeStyle = gradientC;
    }
    });

  }

  render () {
    return (
      <div className="App-header">
        <div className="App-top-line"/>
        <Parallax bgImage={process.env.REACT_APP_STATIC_URL + 'assets/piano_bg_6.jpg'} strength={200}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: "0% 200%"
        }}>
        <div className="App-header-container">


          <div className="App-header-top-container">
            {/* <img className="App-header-bg" src="http://localhost:8080/piano_bg_2.jpg" /> */}
            <div className="App-header-top">
              <Link to="/"><AppIcon className="App-logo"/></Link>
              <canvas className="App-sine-waves" id="waves" height="150px"/>

            </div>
          </div>
        <div className="App-header-bottom">
          <div className="App-title">
            <Link to="/">Vyacheslav Basharov</Link>
          </div>
          <div className="App-subtitle">
            <Link to="/">Composer</Link>
          </div>
          <br/>
          <div className="App-tagline">
            <p>Need music for your </p>
            <ul>
              <li>film?</li>
              <li>show?</li>
              <li>game?</li>
              <li>ad?</li>
            </ul>
          </div>
          <br/>
        </div>
      </div>
    </Parallax>
    </div>
    )
  }

}
