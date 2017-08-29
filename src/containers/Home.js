import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PageSection from '../components/layout/PageSection'

class Home extends Component {
  render() {
    const { children } = this.props
    return (
      <PageSection>
        oh hi!
      </PageSection>
    )
  }
}

export default Home;
