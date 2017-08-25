(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/base/links.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Links</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <p>\n' +
    '    <a href="#">This is a link</a><br />\n' +
    '    <a href="#">This is a really long link that could break layout if you don\'t have word wrap set</a><br />\n' +
    '    <a class="body1" href="#">Link with a heading class set</a>\n' +
    '  </p>\n' +
    '</page-section>\n' +
    '');
}]);
})();
