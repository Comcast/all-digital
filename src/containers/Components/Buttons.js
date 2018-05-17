import React, { Component } from 'react'
import { PageSection } from 'all-digital-components'

class Buttons extends Component {
  render() {
    return (
      <PageSection>
        <h1>Buttons</h1>
        <hr />

        <h2>Default Button</h2>
        <a class="button">Button Text</a>
        <a class="button pseudo-class-hover">Hover Button Text</a>
        <a class="button pseudo-class-hover pseudo-class-active">Active Button Text</a>
        <button disabled class="button" type="button">Disabled Button Text</button>
        <a class="button is-loading">Loading Button Text</a>

        <h2>Primary Button</h2>
        <a class="button button--primary">Button Text</a>
        <a class="button button--primary pseudo-class-hover">Hover Button Text</a>
        <a class="button button--primary pseudo-class-hover pseudo-class-active">Active Button Text</a>
        <button disabled class="button button--primary button--utility" type="button">Disabled Button Text</button>
        <a class="button button--primary is-loading">Loading Button Text</a>

        <h2>Utility Button</h2>
        <a class="button button--utility">Button Text</a>
        <a class="button button--utility pseudo-class-hover">Hover Button Text</a>
        <a class="button button--utility pseudo-class-hover pseudo-class-active">Active Button Text</a>
        <button disabled class="button button--utility" type="button">Disabled Button Text</button>
        <a class="button button--utility is-loading">Loading Button Text</a>

        <h2>Primary Utility Button</h2>
        <a class="button button--primary button--utility">Button Text</a>
        <a class="button button--primary button--utility pseudo-class-hover">Hover Button Text</a>
        <a class="button button--primary button--utility pseudo-class-hover pseudo-class-active">Active Button Text</a>
        <button disabled class="button button--primary button--utility" type="button">Disabled Button Text</button>
        <a class="button button--primary button--utility is-loading">Loading Button Text</a>

        <h2>Small Button</h2>
        <button class="button button--small">Button Text</button>

        <h2>Large Button</h2>
        <button class="button button--large">Button Text</button>

        <h2>Full Width Button</h2>
        <button class="button button--full-width">Button Text</button>

        <h2>Text Button</h2>
        <button class="button button--text" type="button">Button Text</button>
        <a class="button button--text">Button Text</a>
        <button class="button button--text body1" type="button">Button Text (body1)</button>
      </PageSection>
    )
  }
}

export default Buttons;
