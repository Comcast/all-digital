import React from 'react'
import IconXfinity from '../icons/IconXfinity'
import { Link } from 'react-router'

const PageHeader = () => {
  return (
    <header id="page-header" className="page-header" role="banner">
      <div className="page-header__logo-wrap">
        <Link to="/" className="page-header__logo" rel="home">
          <IconXfinity />
          <span className="visuallyhidden">XFINITY</span>
        </Link>
      </div>
    </header>
  )
}

export default PageHeader
