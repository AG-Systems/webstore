import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Router, Route, IndexRoute, browserHistory, hashHistory, Redirect } from 'react-router';

import '../css/styles.scss';

import App from 'views/App';
import Home from 'views/Home';
import Show from 'views/Show';


ReactDOM.render(
  <Router history={ hashHistory }>
   <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='products/:id' component={ Show } />
      <Redirect from='products' to='/' />
    </Route>
    </AnimatedSwitch>
  </Router>,
  document.getElementById('app') // eslint-disable-line
);
