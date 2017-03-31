import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { history } from './store'
import App from '../containers/App'
import Home from '../containers/Home'
import Messenger from '../containers/Messenger'

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:nickname" component={Messenger} />
    </Route>
  </Router>
)

export default Routes