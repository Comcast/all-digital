import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Colors from './containers/Base/Colors'
import Typography from './containers/Base/Typography'

export default <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="/base/colors" component={Colors} />
  <Route path="/base/typography" component={Typography} />
</Route>
