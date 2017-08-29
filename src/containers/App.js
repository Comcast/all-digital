import React, { Component } from 'react'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="page-app">
        <PageHeader />
        <main class="page-main">
          {children}
        </main>
        <PageFooter />
      </div>
    )
  }
}

export default App;
