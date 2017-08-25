(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/card-group-buttons/card-group-buttons.html',
    '<div class="card-group {{ classes }}">\n' +
    '  <div class="card-group__item" ng-repeat="item in [0, 1, 2, 3]">\n' +
    '    <button class="card" type="button">\n' +
    '      <span class="card__content">\n' +
    '        <span class="hgroup">\n' +
    '          <span class="heading2">Linked Cards</span>\n' +
    '          <span class="body3">Some text with a faux <span class="link">link</span>.</span>\n' +
    '        </span>\n' +
    '      </span>\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
