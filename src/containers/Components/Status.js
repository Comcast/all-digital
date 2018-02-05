import React, { Component } from 'react'
import PageSection from '../../components/PageSection'

class Card extends Component {
  render() {
    return (
      <PageSection>
        <h1>Status</h1>
        <hr />

        <span class="status">Default Status</span><br />
        <span class="status status--success">Sucess Status</span><br />
        <span class="status status--warning">Warning Status</span><br />
        <span class="status status--danger">Danger Status</span><br />
        <span class="status status--none">"No" Status</span>
      </PageSection>
    )
  }
}

export default Card;
