import React, { Component } from 'react'
import { PageSection } from 'all-digital-components'

class FormBooleans extends Component {
  render() {
    return (
      <PageSection>
        <h1>Link Group</h1>
        <hr />

        <h2>Link Group with Multiple Items</h2>
        <div class="link-group">
          <div class="link-group__item">
            <a>Link 1</a>
          </div>
          <div class="link-group__item">
            <a>Link 2</a>
          </div>
          <div class="link-group__item">
            <a>Link 3</a>
          </div>
        </div>

        <h2>Link Group with One Item</h2>
        <div class="link-group">
          <div class="link-group__item">
            <a>Link1</a>
          </div>
        </div>
      </PageSection>
    )
  }
}

export default FormBooleans;
