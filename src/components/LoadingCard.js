import React, { Component } from 'react'
import Loading from './Loading'

class LoadingCard extends Component {
  render() {
    return (
      <div class="card card--loading-dots">
        <div class="card__content">
          <Loading></Loading>
        </div>
      </div>
    )
  }
}

export default LoadingCard
