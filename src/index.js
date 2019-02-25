import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './containers/App';

require('./sass/style.scss');

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
