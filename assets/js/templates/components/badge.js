(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/badge.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Badges</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Badges</h2>\n' +
    '  <div class="badge">Default Badge</div>\n' +
    '  <div class="badge badge--success">Success Badge</div>\n' +
    '  <div class="badge badge--info">Info Badge</div>\n' +
    '  <div class="badge badge--warning">Warning Badge</div>\n' +
    '  <div class="badge badge--danger">Danger Badge</div>\n' +
    '</page-section>\n' +
    '');
}]);
})();
