(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/card-group/card-group.html',
    '<div class="card-group {{ classes }}">\n' +
    '  <div class="card-group__item">\n' +
    '    <card>\n' +
    '      <h2>Card Content</h2>\n' +
    '    </card>\n' +
    '  </div>\n' +
    '  <div class="card-group__item" ng-repeat="item in [0, 1, 2, 3]">\n' +
    '    <card classes="card--secondary">\n' +
    '      <h3>Card Content</h3>\n' +
    '    </card>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
