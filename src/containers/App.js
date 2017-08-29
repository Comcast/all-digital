import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="page-app">
        <PageHeader />
        <main class="page-main">
          {children}
        </main>
        <PageFooter />
      </div>
    )
  }
}

export default App;
