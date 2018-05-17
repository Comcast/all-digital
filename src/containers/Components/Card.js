import React, { Component } from 'react'
import { PageSection } from 'all-digital-components'

class Card extends Component {
  render() {
    let mediaStyles = {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#888'
    };

    return (
      <PageSection>
        <h1>Cards</h1>
        <hr />

        <h2>Default Card</h2>
        <div class="card">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
        </div>

        <h2>Card Secondary</h2>
        <div class="card card--secondary">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
        </div>

        <h2>Card Success</h2>
        <div class="card card--success">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
        </div>

        <h2>Card Info</h2>
        <div class="card card--info">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
        </div>

        <h2>Card Danger</h2>
        <div class="card card--danger">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
        </div>

        <h2>Card Warning</h2>
        <div class="card card--warning">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
        </div>

        <h2>Card with action</h2>
        <div class="card">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
          <div class="card__action">
            <a>Link</a>
          </div>
        </div>

        <h2>Card with action right</h2>
        <div class="card card--action-right">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
          <div class="card__action">
            <a>Link</a>
          </div>
        </div>

        <h2>Card with action right at 768</h2>
        <div class="card card--action-right-at-768">
          <div class="card__content">
            <div class="hgroup">
              <h2 class="body2">Card Content</h2>
              <p>More card content</p>
            </div>
          </div>
          <div class="card__action">
            <a>Link</a>
          </div>
        </div>

        <h2>Card with date and action right at 768</h2>
        <div class="card card--has-date card--action-right-at-768">
          <div class="card__date hgroup">
            <span class="card__date-item card__date-item--day heading5">Fri</span>
            <span class="card__date-item card__date-item--month-date heading5">Apr 8</span>
            <span class="card__date-item card__date-item--time body4">1:05 pm</span>
          </div>
          <div class="card__content">
            <div class="hgroup">
              <h4 class="body2">Card Content</h4>
              <p>More card content</p>
            </div>
          </div>
          <div class="card__action">
            <a>Link</a>
          </div>
        </div>

        <h2>Card with media and action right at 768</h2>
        <div class="card card--has-media card--action-right-at-768">
          <div class="card__media" ng-if="hasMedia">
            <div style={mediaStyles}></div>
          </div>
          <div class="card__content">
            <div class="hgroup">
              <h4 class="body2">Card Content</h4>
              <p>More card content</p>
              <div class="action">
                <a>Link</a>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    )
  }
}

export default Card;
