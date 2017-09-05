import React from 'react'
import { Link } from 'react-router-dom'
import { basePath } from '../../routes'

const PageSidebar = () => {
  return (
    <aside class="page-sidebar">
      <p><b>All Digital Styleguide</b></p>

      <nav>
        <ul>
          <li>
            <Link to={{ pathname: `${basePath}/` }}>
              Overview
            </Link>
          </li>
          <li>
            Base

            <ul>
              <li>
                <Link to={{ pathname: `${basePath}/base/colors` }}>
                  Colors
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/base/forms` }}>
                  Forms
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/base/typography` }}>
                  Typography
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/base/headings` }}>
                  Headings
                </Link>
              </li>
            </ul>
          </li>
          <li>
            Components

            <ul>
              <li>
                <Link to={{ pathname: `${basePath}/components/actions` }}>
                  Actions
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/badges` }}>
                  Badges
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/buttons` }}>
                  Buttons
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/cards` }}>
                  Cards
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/card-groups` }}>
                  Card Groups
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/form-controls` }}>
                  Form Controls
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/form-boolean` }}>
                  Form Boolean
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/link-group` }}>
                  Link Group
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/loading` }}>
                  Loading
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `${basePath}/components/page-sections` }}>
                  Page Sections
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
