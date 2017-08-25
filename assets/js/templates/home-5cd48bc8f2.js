(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/home.html',
    '<page-section classes="page-section--medium ui-blue">\n' +
    '  <h1 class="display3">All Digital Style Guide</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="ui-grey">\n' +
    '  <div class="hgroup">\n' +
    '    <h2 class="heading4">Introduction</h2>\n' +
    '    <p class="heading1">The All Digital CSS Standards define our approach to creating distinct experiences.</p>\n' +
    '  </div>\n' +
    '\n' +
    '  <p>These standards ensure that all of our experiences work together as a family to embody our brand vision, tone and voice.</p>\n' +
    '\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="ui-grey">\n' +
    '  <h2>How to Help.</h2>\n' +
    '\n' +
    '  <p>Pull requests are welcome on GitHub in the <a href="https://github.com/Comcast/all-digital" target="_blank">All Digital Project</a>. This styleguide is acts as the visual display and testing ground for the CSS create in the All Digital project.</p>\n' +
    '</page-section>\n' +
    '');
}]);
})();
