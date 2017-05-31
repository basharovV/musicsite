import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-100251861-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <BrowserRouter onUpdate={logPageView}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
