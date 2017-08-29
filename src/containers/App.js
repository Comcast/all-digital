import React, { Component } from 'react'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import PageSidebar from '../components/layout/PageSidebar'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="page-app">
        <PageHeader />
        <div class="page-content">
          <main class="page-main">
            {children}
          </main>
          <PageSidebar />
        </div>
        <PageFooter />
      </div>
    )
  }
}

export default App;
