import React, { Component } from 'react';
import { PageSection } from 'adc-ui-components';

const Buttons = () => (
  <PageSection>
    <h1>Buttons</h1>
    <hr />

    <h2>Default Button</h2>
    <a className="button">Button Text</a>
    <a className="button pseudo-class-hover">Hover Button Text</a>
    <a className="button pseudo-class-hover pseudo-class-active">Active Button Text</a>
    <button disabled className="button" type="button">Disabled Button Text</button>
    <a className="button is-loading">Loading Button Text</a>

    <h2>Primary Button</h2>
    <a className="button button--primary">Button Text</a>
    <a className="button button--primary pseudo-class-hover">Hover Button Text</a>
    <a className="button button--primary pseudo-class-hover pseudo-class-active">Active Button Text</a>
    <button disabled className="button button--primary button--utility" type="button">Disabled Button Text</button>
    <a className="button button--primary is-loading">Loading Button Text</a>

    <h2>Utility Button</h2>
    <a className="button button--utility">Button Text</a>
    <a className="button button--utility pseudo-class-hover">Hover Button Text</a>
    <a className="button button--utility pseudo-class-hover pseudo-class-active">Active Button Text</a>
    <button disabled className="button button--utility" type="button">Disabled Button Text</button>
    <a className="button button--utility is-loading">Loading Button Text</a>

    <h2>Primary Utility Button</h2>
    <a className="button button--primary button--utility">Button Text</a>
    <a className="button button--primary button--utility pseudo-class-hover">Hover Button Text</a>
    <a className="button button--primary button--utility pseudo-class-hover pseudo-class-active">Active Button Text</a>
    <button disabled className="button button--primary button--utility" type="button">Disabled Button Text</button>
    <a className="button button--primary button--utility is-loading">Loading Button Text</a>

    <h2>Small Button</h2>
    <button className="button button--small">Button Text</button>

    <h2>Large Button</h2>
    <button className="button button--large">Button Text</button>

    <h2>Full Width Button</h2>
    <button className="button button--full-width">Button Text</button>

    <h2>Text Button</h2>
    <button className="button button--text" type="button">Button Text</button>
    <a className="button button--text">Button Text</a>
    <button className="button button--text body1" type="button">Button Text (body1)</button>
  </PageSection>
);

export default Buttons;
