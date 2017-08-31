import React, { Component } from 'react'
import PageSection from '../../components/PageSection'

class CardGroups extends Component {
  renderCard() {
    return (
      <div class="card">
        <div class="card__content">
          Test
        </div>
      </div>
    )
  }

  renderCardGroup() {
    return Array(4).fill(0).map(() => {
      return (
        <div class="card-group__item">
          {this.renderCard()}
        </div>
      )
    });
  }

  render() {
    return (
      <PageSection>
        <h1>Card Groups</h1>
        <hr />

        <h2>Default Card Group</h2>
        <div class="card-group">
          {this.renderCardGroup()}
        </div>

        <h2>Card Group Links</h2>
        <div class="card-group">
          {this.renderCardGroup()}
        </div>

        <h2>Card Group Buttons</h2>
        <div class="card-group">
          {this.renderCardGroup()}
        </div>

        <div class="card-group">
          <div class="card-group__item">
            <card>
              <h2>Card Content</h2>
            </card>
          </div>
          {this.renderCardGroup()}
        </div>
      </PageSection>
    )
  }
}

export default CardGroups;
