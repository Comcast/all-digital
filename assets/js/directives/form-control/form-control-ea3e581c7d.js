(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/form-control/form-control.html',
    '<div class="form-control {{classes}}">\n' +
    '  <label class="form-control__label" for="{{inputId}}" ng-if="label" ng-class="labelClass">{{label}}</label>\n' +
    '  <span class="form-control__note" ng-if="note">{{note}}</span>\n' +
    '  <div class="form-control__input" ng-transclude>\n' +
    '  </div>\n' +
    '  <p class="form-control__helper" ng-if="helper">{{helper}}</p>\n' +
    '</div>\n' +
    '');
}]);
})();
