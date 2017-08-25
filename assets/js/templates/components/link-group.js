(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/link-group.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Link Group</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Link Group</h2>\n' +
    '  <div class="link-group">\n' +
    '    <div class="link-group__item">\n' +
    '      <a href="#">Link 1</a>\n' +
    '    </div>\n' +
    '    <div class="link-group__item">\n' +
    '      <a href="#">Link 2</a>\n' +
    '    </div>\n' +
    '    <div class="link-group__item">\n' +
    '      <a href="#">Link 3</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <h2>Link Group with One Item</h2>\n' +
    '  <div class="link-group">\n' +
    '    <div class="link-group__item">\n' +
    '      <a href="#">Link1</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</page-section>\n' +
    '');
}]);
})();
