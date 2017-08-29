import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PageSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children, className } = this.props
    return (
      <div className={`page-section ${className}`}>
        <div className="page-section__wrapper">
          <div className="page-section__content">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default PageSection
