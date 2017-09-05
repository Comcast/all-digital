import React, { Component } from 'react'
import PageSection from '../../components/PageSection'

class PageSections extends Component {
  render() {
    return (
      <div>
        <PageSection>
          <h1>Page Section</h1>
          <hr />
        </PageSection>

        <PageSection className="page-section--medium">
          <h2>Page Section Medium</h2>
        </PageSection>

        <PageSection className="page-section--tall">
          <h2>Page Section Tall</h2>
        </PageSection>

        <PageSection className="page-section--overlay">
          <h2>Page Section Overlay</h2>
        </PageSection>

        <PageSection className="page-section--overlay page-section--overlay-right">
          <h2>Page Section Overlay Right</h2>
        </PageSection>

        <PageSection className="page-section--overlay page-section--overlay-image-left">
          <h2>Page Section Overlay Image Left</h2>
        </PageSection>
      </div>
    )
  }
}

export default PageSections;
