import React from 'react';
import { PageSection } from 'adc-ui-components';

const FormBooleans = () => (
  <PageSection>
    <h1>Link Group</h1>
    <hr />

    <h2>Link Group with Multiple Items</h2>
    <div className="link-group">
      <div className="link-group__item">
        <a>Link 1</a>
      </div>
      <div className="link-group__item">
        <a>Link 2</a>
      </div>
      <div className="link-group__item">
        <a>Link 3</a>
      </div>
    </div>

    <h2>Link Group with One Item</h2>
    <div className="link-group">
      <div className="link-group__item">
        <a>Link1</a>
      </div>
    </div>
  </PageSection>
);

export default FormBooleans;
