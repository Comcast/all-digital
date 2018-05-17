import React, { Component } from 'react'
import { PageSection } from 'all-digital-components'

class Badges extends Component {
  render() {
    return (
      <PageSection>
        <h1>Badges</h1>
        <hr />

        <div class="badge">Default Badge</div>
        <div class="badge badge--success">Success Badge</div>
        <div class="badge badge--info">Info Badge</div>
        <div class="badge badge--warning">Warning Badge</div>
        <div class="badge badge--danger">Danger Badge</div>
      </PageSection>
    )
  }
}

export default Badges;
