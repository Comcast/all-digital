(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/base.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Base Styles</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--centered-text">\n' +
    '\n' +
    '</page-section>\n' +
    '');
}]);
})();
