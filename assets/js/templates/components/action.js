(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/action.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Actions</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Default Action</h2>\n' +
    '  <div class="action">\n' +
    '    <a class="button" href="#">Button Text</a>\n' +
    '  </div>\n' +
    '\n' +
    '  <h2>Action Centered</h2>\n' +
    '  <div class="action action--centered">\n' +
    '    <a class="button" href="#">Button Text</a>\n' +
    '  </div>\n' +
    '\n' +
    '  <h2>Action Right</h2>\n' +
    '  <div class="action action--right">\n' +
    '    <a class="button" href="#">Button Text</a>\n' +
    '  </div>\n' +
    '\n' +
    '  <h2>Multi Action Right</h2>\n' +
    '  <div class="action action--right">\n' +
    '    <div class="action__item">\n' +
    '      <a class="button button--primary" href="#">Button Text</a>\n' +
    '    </div>\n' +
    '    <div class="action__item">\n' +
    '      <a class="button" href="#">Button Text</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</page-section>\n' +
    '');
}]);
})();
