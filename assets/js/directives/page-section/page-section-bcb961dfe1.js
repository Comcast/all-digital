(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/page-section/page-section.html',
    '<section class="page-section {{classes}}" style="{{css}}">\n' +
    '  <div class="page-section__wrapper clearfix">\n' +
    '    <div class="page-section__content" ng-transclude>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();
