import React from 'react'
import { Link } from 'react-router'

const PageSidebar = () => {
  return (
    <aside class="page-sidebar">
      <p><b>All Digital</b> Styleguide</p>

      <nav role="navigation">
        <ul>
          <li>
            <Link to="/">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/">
              Base
            </Link>

            <ul>
              <li>
                <Link to="/base/colors">
                  Colors
                </Link>
              </li>
              <li>
                <Link to="/base/typography">
                  Typography
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              Components
            </Link>

            <ul>
              <li>
                <Link to="/base/typography">
                  Typography
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default PageSidebar
