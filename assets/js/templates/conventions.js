(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/conventions.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Conventions and Style</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <p><a href="http://cssguidelin.es/" target="_blank">http://cssguidelin.es/</a><br />\n' +
    '  <a href="https://sass-guidelin.es/" target="_blank">https://sass-guidelin.es/</a></p>\n' +
    '</page-section>\n' +
    '');
}]);
})();
