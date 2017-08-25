(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/form-boolean/form-boolean.html',
    '<div class="form-control form-control--boolean {{classes}}">\n' +
    '  <div class="form-control__input">\n' +
    '    <ng-transclude-replace></ng-transclude-replace>\n' +
    '    <label class="form-control__label" for="{{inputId}}" ng-if="label">{{ label }}</label>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
