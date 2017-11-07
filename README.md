# All Digital CSS

Welcome to the All Digital brought to you by Comcast.

* Built for unity: Using the All Digital markup and CSS framework produces UIs that reflect the Comcast All Digital look and feel.
* Focused on Simplicity: What sets All Digital apart is what we've left out. The goal of All Digital was to stay slim and not be overly opinionated. All Digital will provide common elements, but not hinder your application's ability to grow on its own.
* Continuously updated: All Digital is used in production on several Comcast properties. We're always fixing issues and updating with the latest decisions from the [design team](http://design.comcast.com/).

## Quick start

In your project:

```bash
npm install git+https://github.com/Comcast/all-digital.git#v2.0.0
```

## Usage

Include everything:

```css
@import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';
@include xfinity-standard-all;

@import '../../node_modules/all-digital/assets/sass/all-digital';
```

Take what you need:

```css
@import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';
@include xfinity-standard-all;

@import '../../node_modules/all-digital/assets/sass/all-digital/vendors';
@import '../../node_modules/all-digital/assets/sass/all-digital/utils';
@import '../../node_modules/all-digital/assets/sass/all-digital/base';
@import '../../node_modules/all-digital/assets/sass/all-digital/components/buttons';
@import '../../node_modules/all-digital/assets/sass/all-digital/components/card';
@import '../../node_modules/all-digital/assets/sass/all-digital/keyframes';
```

## Example

```css
// fonts
@import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';
@include xfinity-standard-all;

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
```

## Standards

Please follow [Sass Guidelines](https://sass-guidelin.es/) and [CSS Guidelines](http://cssguidelin.es/).
