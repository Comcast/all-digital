export const includeEverything =
`@import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';

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


export const takeWhatYouNeed =
`@import '../../node_modules/all-digital/assets/sass/xfinity_standard_fonts';

@include xfinity-standard-regular;
@include xfinity-standard-regular-italic;
@include xfinity-standard-bold;
@include xfinity-standard-bold-italic;

@import '../../node_modules/all-digital/assets/sass/all-digital/vendors';
@import '../../node_modules/all-digital/assets/sass/all-digital/utils';
@import '../../node_modules/all-digital/assets/sass/all-digital/base';
@import '../../node_modules/all-digital/assets/sass/all-digital/components/buttons';
@import '../../node_modules/all-digital/assets/sass/all-digital/components/card';
@import '../../node_modules/all-digital/assets/sass/all-digital/keyframes';`;

export const example =
`// fonts
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
@import '../../node_modules/all-digital/assets/sass/all-digital/keyframes';`;
