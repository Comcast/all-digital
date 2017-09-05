import React from 'react'
import { Route } from 'react-router-dom'
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
import FormBoolean from './containers/Components/FormBoolean'
import FormControls from './containers/Components/FormControl'
import LinkGroup from './containers/Components/LinkGroup'

export const Routes = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/base/colors' component={Colors} />
    <Route exact path='/base/forms' component={Forms} />
    <Route exact path='/base/typography' component={Typography} />
    <Route exact path='/base/Headings' component={Headings} />
    <Route exact path='/components/actions' component={Action} />
    <Route exact path='/components/badges' component={Badges} />
    <Route exact path='/components/buttons' component={Buttons} />
    <Route exact path='/components/cards' component={Card} />
    <Route exact path='/components/card-groups' component={CardGroup} />
    <Route exact path='/components/loading' component={Loading} />
    <Route exact path='/components/page-sections' component={PageSections} />
    <Route exact path='/components/form-boolean' component={FormBoolean} />
    <Route exact path='/components/form-controls' component={FormControls} />
    <Route exact path='/components/link-group' component={LinkGroup} />
  </div>
)

export default Routes
