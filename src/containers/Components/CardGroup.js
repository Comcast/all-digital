import React from 'react';
import { PageSection } from 'adc-ui-components';

const renderCard = (element) => {
  const el = element || 'div';
  const CardContent = React.createElement('div', { className: 'card__content' }, 'Test');

  return React.createElement(el, { className: 'card' }, CardContent);
};

const renderCardGroup = element => (
  Array(4).fill(0).map(() => (
    <div className="card-group__item">
      {renderCard(element)}
    </div>
  ))
);

const CardGroups = () => (
  <PageSection>
    <h1>Card Groups</h1>
    <hr />

    <h2>Default Card Group</h2>
    <div className="card-group">
      {renderCardGroup()}
    </div>

    <h2>Card Group Links</h2>
    <div className="card-group">
      {renderCardGroup('a')}
    </div>

    <h2>Card Group Buttons</h2>
    <div className="card-group">
      {renderCardGroup('button')}
    </div>

    <div className="card-group">
      <div className="card-group__item">
        <div className="card">
          <div className="card__content">
            <h2>Card Content</h2>
          </div>
        </div>
      </div>
      {renderCardGroup()}
    </div>
  </PageSection>
);

export default CardGroups;
