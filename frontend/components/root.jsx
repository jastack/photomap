import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';



const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRedirect to="/index" />
      </Route>
    </Router>
  </Provider>);
};

export default Root;
