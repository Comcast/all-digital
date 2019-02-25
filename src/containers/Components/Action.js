import React, { Component } from 'react';
import { PageSection } from 'all-digital-components';

class Buttons extends Component {
  render() {
    return (
      <PageSection>
        <h1>Actions</h1>
        <hr />

        <h2>Default Action</h2>
        <div className="action">
          <a className="button">Button Text</a>
        </div>

        <h2>Action Centered</h2>
        <div className="action action--centered">
          <a className="button">Button Text</a>
        </div>

        <h2>Action Right</h2>
        <div className="action action--right">
          <a className="button">Button Text</a>
        </div>

        <h2>Multi Action Right</h2>
        <div className="action action--right">
          <div className="action__item">
            <a className="button button--primary">Button Text</a>
          </div>
          <div className="action__item">
            <a className="button">Button Text</a>
          </div>
        </div>

        <h2>Multi Action Primary Right but Centered</h2>
        <div className="action action--right-centered">
          <div className="action__item">
            <a className="button button--primary">Button Text</a>
          </div>
          <div className="action__item">
            <a className="button">Button Text</a>
          </div>
        </div>
      </PageSection>
    );
  }
}

export default Buttons;
