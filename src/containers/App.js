import React, { Component } from 'react';
import { PageHeader, PageFooter } from 'all-digital-components';
import PageSidebar from '../components/layout/PageSidebar';
import Routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="page-app">
        <PageHeader />
        <div className="page-content">
          <main className="page-main">
            <Routes />
          </main>
          <PageSidebar />
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default App;
