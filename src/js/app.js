import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

var Navigation = require('./components/navigation');
var SearchPage = require('./pages/search');
var ResultsPage = require('./pages/results');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SearchPage} />
      <Route path='/' component={SearchPage} />
      <Route path='/results' component={ResultsPage} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
);
