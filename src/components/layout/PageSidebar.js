import React from 'react'
import { Link } from 'react-router-dom'

const PageSidebar = () => {
  return (
    <aside class="page-sidebar">
      <p><b>All Digital Styleguide</b></p>

      <nav>
        <ul>
          <li>
            <Link to={{ pathname: '/' }}>
              Overview
            </Link>
          </li>
          <li>
            Base

            <ul>
              <li>
                <Link to={{ pathname: '/base/colors' }}>
                  Colors
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/base/forms' }}>
                  Forms
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/base/typography' }}>
                  Typography
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/base/headings' }}>
                  Headings
                </Link>
              </li>
            </ul>
          </li>
          <li>
            Components

            <ul>
              <li>
                <Link to={{ pathname: '/components/actions' }}>
                  Actions
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/badges' }}>
                  Badges
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/buttons' }}>
                  Buttons
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/cards' }}>
                  Cards
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/card-groups' }}>
                  Card Groups
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/form-controls' }}>
                  Form Controls
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/form-boolean' }}>
                  Form Boolean
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/link-group' }}>
                  Link Group
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/loading' }}>
                  Loading
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/components/page-sections' }}>
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
