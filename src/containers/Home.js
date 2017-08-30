import React, { Component } from 'react'
import PageSection from '../components/PageSection'

class Home extends Component {
  render() {
    let includeEverything = `@import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';

@include xfinity-standard-thin;
@include xfinity-standard-thin-italic;
@include xfinity-standard-extra-light;
@include xfinity-standard-extra-light-italic;
@include xfinity-standard-light;
@include xfinity-standard-light-italic;
@include xfinity-standard-regular;
@include xfinity-standard-regular-italic;
@include xfinity-standard-medium;
@include xfinity-standard-medium-italic;
@include xfinity-standard-bold;
@include xfinity-standard-bold-italic;
@include xfinity-standard-condensed-medium;
@include xfinity-standard-condensed-bold;

@import '../../node_modules/all-digital/assets/sass/all-digital';`;

    return (
      <PageSection>
        <h1>Overview</h1>
        <hr />

          <p>Welcome to the All Digital brought to you by Comcast.</p>

          <ul>
            <li>Built for unity: Using the All Digital markup and CSS framework produces UIs that reflect the Comcast All Digital look and feel.</li>
            <li>Focused on Simplicity: What sets All Digital apart is what we've left out. The goal of All Digital was to stay slim and not be overly opinionated. All Digital will provide common elements, but not hinder your application's ability to grow on its own.</li>
            <li>Continuously updated: All Digital is used in production on several Comcast properties. We're always fixing issues and updating with the latest decisions from the [design team](http://design.comcast.com/).</li>
          </ul>

          <h2>Quick start</h2>

          <p>In your project:</p>

          <code><pre>
          npm install git+https://github.com/Comcast/all-digital.git#v1.10.1
          </pre></code>

          <h2>Usage</h2>

          <p>Include everything:</p>

          <pre><code>{includeEverything}</code></pre>

          <p>Take what you need:</p>

          <code><pre>
          @import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';

          @include xfinity-standard-regular;
          @include xfinity-standard-regular-italic;
          @include xfinity-standard-bold;
          @include xfinity-standard-bold-italic;

          @import '../../node_modules/all-digital/assets/sass/all-digital/vendors';
          @import '../../node_modules/all-digital/assets/sass/all-digital/utils';
          @import '../../node_modules/all-digital/assets/sass/all-digital/base';
          @import '../../node_modules/all-digital/assets/sass/all-digital/components/buttons';
          @import '../../node_modules/all-digital/assets/sass/all-digital/components/card';
          @import '../../node_modules/all-digital/assets/sass/all-digital/keyframes';
          </pre></code>

          <h2>Example</h2>

          <code><pre>
          // fonts
          @import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';

          @include xfinity-standard-thin;
          // @include xfinity-standard-thin-italic;
          @include xfinity-standard-extra-light;
          // @include xfinity-standard-extra-light-italic;
          @include xfinity-standard-light;
          @include xfinity-standard-light-italic;
          @include xfinity-standard-regular;
          // @include xfinity-standard-regular-italic;
          @include xfinity-standard-medium;
          @include xfinity-standard-medium-italic;
          // @include xfinity-standard-bold;
          // @include xfinity-standard-bold-italic;
          // @include xfinity-standard-condensed-medium;
          // @include xfinity-standard-condensed-bold;

          // Vendors
          // contains all the CSS files from
          // external libraries and frameworks
          @import '../../node_modules/all-digital/assets/sass/all-digital/vendors';

          // Utilities
          // Contains mixins, functions and
          // variables that should be used to
          // make code cleaner and easier
          @import '../../node_modules/all-digital/assets/sass/all-digital/utils';

          // Variable Overrides
          $wrapper-max-width: 1072px;

          // Base
          // Contains styles for base elements
          // typography, tables, etc
          @import '../../node_modules/all-digital/assets/sass/all-digital/base';
          @import 'base';

          // Components
          // Components are more mature
          // elements that are self contained
          // and reusable through the UI
          @import '../../node_modules/all-digital/assets/sass/all-digital/components';
          @import 'components';

          // Layout
          // High level structural elements
          // that establish more global layout
          @import 'layout';

          // Pages
          // Pages styles for one off
          // styles for pages
          @import 'pages';

          // Shame
          // shame file houses code that needs
          // to be refactored or re-encorporated
          // in the CSS architecture
          @import 'shame';

          // Print
          // local print styles
          @import 'print';

          // Keyframes
          // keyframes for animations
          @import '../../node_modules/all-digital/assets/sass/all-digital/keyframes';
          </pre></code>


          <h2>Standards</h2>
          <p>Please follow [Sass Guidelines](https://sass-guidelin.es/) and [CSS Guidelines](http://cssguidelin.es/).</p>
      </PageSection>
    )
  }
}

export default Home;
