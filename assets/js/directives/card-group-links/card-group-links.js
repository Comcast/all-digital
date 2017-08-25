(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/card-group-links/card-group-links.html',
    '<div class="card-group {{ classes }}">\n' +
    '  <div class="card-group__item" ng-repeat="item in [0, 1, 2, 3]">\n' +
    '    <a class="card" href="javascript:void(0)">\n' +
    '      <div class="card__content">\n' +
    '        <div class="hgroup">\n' +
    '          <h2>Linked Cards</h2>\n' +
    '          <p>Some text with a faux <span class="link">link</span>.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </a>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
