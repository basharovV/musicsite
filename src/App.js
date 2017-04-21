import React, { Component } from 'react';
import Header from './components/Header.js';
import ScrollSection from './components/ScrollSection.js'
import logo from './logo.svg';
import Helmet from 'react-helmet'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <style>
            @import url('https://fonts.googleapis.com/css?family=Bahiana');
            @import url('https://fonts.googleapis.com/css?family=Amatica+SC');
            @import url('https://fonts.googleapis.com/css?family=Barrio');
            @import url('https://fonts.googleapis.com/css?family=Dosis');
            @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
            @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch');
            @import url(node_modules/react-blur/dist.css);


          </style>
        </Helmet>
        <Header/>
        <ScrollSection/>
      </div>
    );
  }
}

export default App;
