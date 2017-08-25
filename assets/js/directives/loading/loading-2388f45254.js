(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/loading/loading.html',
    '<div class="loading">\n' +
    '  <div class="loading__content">\n' +
    '    <div class="loading__dots">\n' +
    '      <div class="loading__dot"></div>\n' +
    '      <div class="loading__dot"></div>\n' +
    '      <div class="loading__dot"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
