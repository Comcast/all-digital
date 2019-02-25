import React, { Component } from 'react';
import { PageSection } from 'all-digital-components';

class Badges extends Component {
  render() {
    return (
      <PageSection>
        <h1>Badges</h1>
        <hr />

        <div className="badge">Default Badge</div>
        <div className="badge badge--success">Success Badge</div>
        <div className="badge badge--info">Info Badge</div>
        <div className="badge badge--warning">Warning Badge</div>
        <div className="badge badge--danger">Danger Badge</div>
      </PageSection>
    );
  }
}

export default Badges;
