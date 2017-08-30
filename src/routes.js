import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Colors from './containers/Base/Colors'
import Typography from './containers/Base/Typography'
import Forms from './containers/Base/Forms'
import Headings from './containers/Base/Headings'
import Buttons from './containers/Components/Buttons'

export default <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="/base/colors" component={Colors} />
  <Route path="/base/forms" component={Forms} />
  <Route path="/base/typography" component={Typography} />
  <Route path="/base/Headings" component={Headings} />
  <Route path="/components/buttons" component={Buttons} />
</Route>
