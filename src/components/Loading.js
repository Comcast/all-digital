import React, { Component } from 'react'

class Loading extends Component {
  render() {
    return (
      <div class="loading">
        <div class="loading__content">
          <div class="loading__dots">
            <div class="loading__dot"></div>
            <div class="loading__dot"></div>
            <div class="loading__dot"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loading
