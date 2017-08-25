(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/loading.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Loading</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h3>Description</h3>\n' +
    '  <p>The loading component can be used as a full page takeover with fixed position and a bg color. If it is nested within a <a href="#/components/page-section">page-section</a> component, it will add the loading indicator centered within the page-section. See example below</p>\n' +
    '\n' +
    '  <div class="card card--loading-dots">\n' +
    '    <loading></loading>\n' +
    '  </div>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--tall">\n' +
    '  <loading></loading>\n' +
    '</page-section>\n' +
    '\n' +
    '<!-- <loading></loading> -->\n' +
    '');
}]);
})();
