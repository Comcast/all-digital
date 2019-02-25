import React from 'react';
import { PageSection } from 'adc-ui-components';
import { includeEverything, takeWhatYouNeed, example } from '../helpers/home';

const Home = () => (
  <PageSection>
    <h1>Overview</h1>
    <hr />

    <p>Welcome to the All Digital brought to you by Comcast.</p>

    <ul>
      <li>
        {`Built for unity: Using the All Digital markup and CSS framework produces UIs that
        reflect the Comcast All Digital look and feel.`}
      </li>
      <li>
        {`Focused on Simplicity: What sets All Digital apart is what we've left out. The goal of
          All Digital was to stay slim and not be overly opinionated. All Digital will provide
          common elements, but not hinder your application's ability to grow on its own.`}
      </li>
      <li>
        {`Continuously updated: All Digital is used in production on several Comcast properties.
          We're always fixing issues and updating with the latest decisions from the`}
        <a href="http://design.comcast.com/" target="_blank" rel="noopener noreferrer">design team</a>
        .
      </li>
    </ul>

    <h2>Quick start</h2>

    <p>In your project:</p>

    <code>
      <pre>
        npm install git+https://github.com/Comcast/all-digital.git#v2.2.0
      </pre>
    </code>

    <h2>Usage</h2>

    <p>Include everything:</p>
    <pre><code>{includeEverything}</code></pre>

    <p>Take what you need:</p>
    <pre><code>{takeWhatYouNeed}</code></pre>

    <h2>Example</h2>
    <pre><code>{example}</code></pre>

    <h2>Standards</h2>
    <p>
      Please follow
      <a href="https://sass-guidelin.es/" target="_blank" rel="noopener noreferrer">Sass Guidelines</a>
      {' '}
      and
      <a href="http://cssguidelin.es/" target="_blank" rel="noopener noreferrer">CSS Guidelines</a>
      .
    </p>
  </PageSection>
);

export default Home;
