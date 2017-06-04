import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import withTracker from './components/withTracker';

import './index.css';
import { Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route component={withTracker(App)}/>
  </BrowserRouter>,
  document.getElementById('root')
);
