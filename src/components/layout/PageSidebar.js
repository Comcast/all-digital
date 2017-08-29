import React from 'react'
import { Link } from 'react-router'

const PageSidebar = () => {
  return (
    <aside class="page-sidebar">
      <p><b>All Digital</b> Styleguide</p>

      <nav>
        <ul>
          <li>
            <Link to="/">
              Overview
            </Link>
          </li>
          <li>
            Base

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
            Components

            <ul>
              <li>
                <Link to="/components/buttons">
                  Buttons
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
