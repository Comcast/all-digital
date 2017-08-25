(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/card-group.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Card Group</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Default Card Group</h2>\n' +
    '  <card-group></card-group>\n' +
    '\n' +
    '  <h2>Card Group Links</h2>\n' +
    '  <card-group-links></card-group-links>\n' +
    '\n' +
    '  <h2>Card Group Links</h2>\n' +
    '  <card-group-buttons></card-group-buttons>\n' +
    '\n' +
    '  <div class="card-group {{ classes }}">\n' +
    '    <div class="card-group__item">\n' +
    '      <card>\n' +
    '        <h2>Card Content</h2>\n' +
    '      </card>\n' +
    '    </div>\n' +
    '    <div class="card-group__item" ng-repeat="item in [0, 1, 2, 3]">\n' +
    '      <card classes="card--secondary">\n' +
    '        <h3>Card Content</h3>\n' +
    '      </card>\n' +
    '    </div>\n' +
    '    <div class="card-group__item">\n' +
    '      <button class="card" type="button">\n' +
    '        <span class="link">Add Personal Mobile Phone Number</span>\n' +
    '      </button>\n' +
    '    </div>\n' +
    '    <div class="card-group__item">\n' +
    '      <a class="card">\n' +
    '        <span class="link">Add Personal Mobile Phone Number</span>\n' +
    '      </a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</page-section>\n' +
    '');
}]);
})();
