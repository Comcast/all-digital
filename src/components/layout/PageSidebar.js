import React from 'react'
import { Link } from 'react-router-dom'

const PageSidebar = () => {
  const body = document.querySelector('body');
  const toggleAppClass = (event) => {
    let className = event.target.getAttribute('ui');
    body.classList = [className];
  };

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
              <li>
                <Link to={{ pathname: '/components/status' }}>
                  Status
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="app-class-toggle">
        <button class="app-class-toggle__button app-class-toggle__button--light" onClick={toggleAppClass} ui="ui-light"><span class="visuallyhidden">Light</span></button>
        <button class="app-class-toggle__button app-class-toggle__button--dark" onClick={toggleAppClass} ui="ui-dark"><span class="visuallyhidden">Dark</span></button>
        <button class="app-class-toggle__button app-class-toggle__button--grey" onClick={toggleAppClass} ui="ui-grey"><span class="visuallyhidden">Grey</span></button>
        <button class="app-class-toggle__button app-class-toggle__button--blue" onClick={toggleAppClass} ui="ui-blue"><span class="visuallyhidden">Blue</span></button>
      </div>
    </aside>
  )
}

export default PageSidebar
