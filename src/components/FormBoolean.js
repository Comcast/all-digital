import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormBoolean extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    inputId: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { children, label, inputId, className } = this.props
    return (
      <div className={`form-control form-control--boolean ${className}`}>
        {children}
        {(label &&
          <label class="form-control__label" htmlFor={inputId}>{label}</label>
        )}
      </div>
    )
  }
}

export default FormBoolean
