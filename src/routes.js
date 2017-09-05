import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Colors from './containers/Base/Colors'
import Typography from './containers/Base/Typography'
import Forms from './containers/Base/Forms'
import Headings from './containers/Base/Headings'
import Buttons from './containers/Components/Buttons'
import Loading from './containers/Components/Loading'
import Action from './containers/Components/Action'
import Badges from './containers/Components/Badges'
import CardGroup from './containers/Components/CardGroup'
import PageSections from './containers/Components/PageSections'
import Card from './containers/Components/Card'

export default <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="/base/colors" component={Colors} />
  <Route path="/base/forms" component={Forms} />
  <Route path="/base/typography" component={Typography} />
  <Route path="/base/Headings" component={Headings} />
  <Route path="/components/actions" component={Action} />
  <Route path="/components/badges" component={Badges} />
  <Route path="/components/buttons" component={Buttons} />
  <Route path="/components/cards" component={Card} />
  <Route path="/components/card-groups" component={CardGroup} />
  <Route path="/components/loading" component={Loading} />
  <Route path="/components/page-sections" component={PageSections} />
</Route>
