import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import TracksPage  from './components/TracksPage.jsx';
import ScrollSection from './components/ScrollSection.jsx';
import Footer from './components/Footer.jsx';
import Helmet from 'react-helmet'
import Blog from './components/Blog.jsx';
import { WrappedBlogPost } from './components/BlogPost.jsx';
import Sticky from 'react-sticky-el';
import 'babel-polyfill';

import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Vyacheslav Basharov | Composer</title>
          <style>
            @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch');
            @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,700');
            @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,400i,700');
            @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
          </style>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="Description" content="Vyacheslav Basharov is a Russian born composer and producer of soundtracks and music for film, games and advertisements, with a focus on experimental and electronic styles. Currently based in London."/>
          <meta name="fragment" content="!"/>
        </Helmet>
          <Header/>
          <Sticky className="App-menu-container" stickyClassName="App-menu-container-sticky">
            <Menu/>
          </Sticky>
          {/* <div className="App-separator"/> */}
          <div>
            <Route exact path="/" component={ScrollSection}/>
            <Route path="/tracks" component={TracksPage}/>
            <Route exact path="/blog" component={Blog}/>
            <Route path="/blog/:post" component={WrappedBlogPost}/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
