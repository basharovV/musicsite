import React, { Component } from 'react';
import Header from './components/Header.jsx';
import ScrollSection from './components/ScrollSection.jsx'
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
            @import url('https://fonts.googleapis.com/css?family=Padauk');
            @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
            @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch');
            @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,700');
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
