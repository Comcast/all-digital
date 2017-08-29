import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormControl extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    inputId: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { children, label, inputId, className } = this.props
    return (
      <div className={`form-control ${className}`}>
        {(label &&
          <label htmlFor={inputId}>{label}</label>
        )}
        <div className="form-control__input">
          {children}
        </div>
      </div>
    )
  }
}

export default FormControl
