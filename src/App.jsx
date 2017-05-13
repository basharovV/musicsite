import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import TracksPage  from './components/TracksPage.jsx';
import ScrollSection from './components/ScrollSection.jsx'
import Helmet from 'react-helmet'
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch,  Link, browserHistory
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <style>
            @import url('https://fonts.googleapis.com/css?family=Amatica+SC');
            @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch');
            @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,700');
            @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
          </style>
        </Helmet>
        <Header/>
        <Menu/>
        {/* <div className="App-separator"/> */}
        <div>
          <Route exact path="/" component={ScrollSection}/>
          <Route path="/tracks" component={TracksPage}/>
        </div>
      </div>
    );
  }
}

export default App;
