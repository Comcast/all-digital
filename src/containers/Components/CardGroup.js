import React, { Component } from 'react';
import { PageSection } from 'all-digital-components';

class CardGroups extends Component {
  renderCard(element) {
    const el = element || 'div';
    const CardContent = React.createElement('div', { className: 'card__content' }, 'Test');

    return React.createElement(el, { className: 'card' }, CardContent);
  }

  renderCardGroup(element) {
    return Array(4).fill(0).map(() => (
      <div className="card-group__item">
        {this.renderCard(element)}
      </div>
    ));
  }

  render() {
    return (
      <PageSection>
        <h1>Card Groups</h1>
        <hr />

        <h2>Default Card Group</h2>
        <div className="card-group">
          {this.renderCardGroup()}
        </div>

        <h2>Card Group Links</h2>
        <div className="card-group">
          {this.renderCardGroup('a')}
        </div>

        <h2>Card Group Buttons</h2>
        <div className="card-group">
          {this.renderCardGroup('button')}
        </div>

        <div className="card-group">
          <div className="card-group__item">
            <card>
              <h2>Card Content</h2>
            </card>
          </div>
          {this.renderCardGroup()}
        </div>
      </PageSection>
    );
  }
}

export default CardGroups;
