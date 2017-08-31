import React, { Component } from 'react'
import PageSection from '../../components/PageSection'
import Loading from '../../components/Loading'
import LoadingCard from '../../components/LoadingCard'

class Buttons extends Component {
  render() {
    return (
      <div>
        <PageSection>
          <h1>Loading</h1>
          <hr />

          <h2>Description</h2>
          <p>The loading component can be used as a full page takeover with fixed position and a bg color. If it is nested within a <a href="#/components/page-section">page-section</a> component, it will add the loading indicator centered within the page-section. See example below</p>

          <LoadingCard></LoadingCard>
        </PageSection>

        <PageSection className="page-section--tall">
          <Loading></Loading>
        </PageSection>
      </div>
    )
  }
}

export default Buttons;
