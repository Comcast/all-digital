(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/page-section.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Page Section</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Default Page Section</h2>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--medium">\n' +
    '  <h2>Page Section Medium</h2>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--tall">\n' +
    '  <h2>Page Section Tall</h2>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--overlay">\n' +
    '  <h2>Page Section Overlay</h2>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--overlay page-section--overlay-right">\n' +
    '  <h2>Page Section Overlay Right</h2>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section classes="page-section--overlay page-section--overlay-image-left">\n' +
    '  <h2>Page Section Overlay Image Left</h2>\n' +
    '</page-section>\n' +
    '');
}]);
})();
