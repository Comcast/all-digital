import React from 'react';
import { PageSection } from 'adc-ui-components';

const Card = () => {
  const mediaStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#888',
  };

  return (
    <PageSection>
      <h1>Cards</h1>
      <hr />

      <h2>Default Card</h2>
      <div className="card">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
      </div>

      <h2>Card Secondary</h2>
      <div className="card card--secondary">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
      </div>

      <h2>Card Success</h2>
      <div className="card card--success">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
      </div>

      <h2>Card Info</h2>
      <div className="card card--info">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
      </div>

      <h2>Card Danger</h2>
      <div className="card card--danger">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
      </div>

      <h2>Card Warning</h2>
      <div className="card card--warning">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
      </div>

      <h2>Card with action</h2>
      <div className="card">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
        <div className="card__action">
          <a>Link</a>
        </div>
      </div>

      <h2>Card with action right</h2>
      <div className="card card--action-right">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
        <div className="card__action">
          <a>Link</a>
        </div>
      </div>

      <h2>Card with action right at 768</h2>
      <div className="card card--action-right-at-768">
        <div className="card__content">
          <div className="hgroup">
            <h2 className="body2">Card Content</h2>
            <p>More card content</p>
          </div>
        </div>
        <div className="card__action">
          <a>Link</a>
        </div>
      </div>

      <h2>Card with date and action right at 768</h2>
      <div className="card card--has-date card--action-right-at-768">
        <div className="card__date hgroup">
          <span className="card__date-item card__date-item--day heading5">Fri</span>
          <span className="card__date-item card__date-item--month-date heading5">Apr 8</span>
          <span className="card__date-item card__date-item--time body4">1:05 pm</span>
        </div>
        <div className="card__content">
          <div className="hgroup">
            <h4 className="body2">Card Content</h4>
            <p>More card content</p>
          </div>
        </div>
        <div className="card__action">
          <a>Link</a>
        </div>
      </div>

      <h2>Card with media and action right at 768</h2>
      <div className="card card--has-media card--action-right-at-768">
        <div className="card__media" ng-if="hasMedia">
          <div style={mediaStyles} />
        </div>
        <div className="card__content">
          <div className="hgroup">
            <h4 className="body2">Card Content</h4>
            <p>More card content</p>
            <div className="action">
              <a>Link</a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Card;
