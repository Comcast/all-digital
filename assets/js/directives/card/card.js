(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/card/card.html',
    '<div class="card {{ classes }}">\n' +
    '  <div class="card__date hgroup" ng-if="hasDate">\n' +
    '    <span class="card__date-item card__date-item--day heading5">Fri</span>\n' +
    '    <span class="card__date-item card__date-item--month-date heading5">Apr 8</span>\n' +
    '    <span class="card__date-item card__date-item--time body4">1:05 pm</span>\n' +
    '  </div>\n' +
    '  <div class="card__media" ng-if="hasMedia">\n' +
    '    <div style="width: 60px; height: 60px; border-radius: 50%; background-color:#888;"></div>\n' +
    '  </div>\n' +
    '  <div class="card__content" ng-transclude>\n' +
    '  </div>\n' +
    '  <div class="card__action" ng-if="hasAction">\n' +
    '    <a>Link</a>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
