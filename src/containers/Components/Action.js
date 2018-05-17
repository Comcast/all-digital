import React, { Component } from 'react'
import { PageSection } from 'all-digital-components'

class Buttons extends Component {
  render() {
    return (
      <PageSection>
        <h1>Actions</h1>
        <hr />

        <h2>Default Action</h2>
        <div class="action">
          <a class="button">Button Text</a>
        </div>

        <h2>Action Centered</h2>
        <div class="action action--centered">
          <a class="button">Button Text</a>
        </div>

        <h2>Action Right</h2>
        <div class="action action--right">
          <a class="button">Button Text</a>
        </div>

        <h2>Multi Action Right</h2>
        <div class="action action--right">
          <div class="action__item">
            <a class="button button--primary">Button Text</a>
          </div>
          <div class="action__item">
            <a class="button">Button Text</a>
          </div>
        </div>

        <h2>Multi Action Primary Right but Centered</h2>
        <div class="action action--right-centered">
          <div class="action__item">
            <a class="button button--primary">Button Text</a>
          </div>
          <div class="action__item">
            <a class="button">Button Text</a>
          </div>
        </div>
      </PageSection>
    )
  }
}

export default Buttons;
