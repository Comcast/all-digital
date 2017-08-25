(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/form-boolean.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Form Boolean</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Form Control Radio</h2>\n' +
    '  <form-boolean label="Radio Form Boolean" input-id="radio">\n' +
    '    <input id="radio" type="radio" name="radio">\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <form-boolean label="Radio Form Boolean" input-id="radio-checked">\n' +
    '    <input id="radio-checked" type="radio" name="radio-checked" checked>\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <form-boolean label="Radio Form Boolean Disabled" input-id="radio-disabled">\n' +
    '    <input id="radio-disabled" type="radio" name="radio-disabled" disabled>\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <form-boolean label="Radio Form Boolean Disabled Checked" input-id="radio-disabled-checked">\n' +
    '    <input id="radio-disabled-checked" type="radio" name="radio-disabled-checked" checked disabled>\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <h2>Form Control Checkbox</h2>\n' +
    '  <form-boolean label="Checkbox Form Boolean" input-id="checkbox">\n' +
    '    <input id="checkbox" type="checkbox" name="checkbox">\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <form-boolean label="Checkbox Form Boolean Checked" input-id="checkbox-checked">\n' +
    '    <input id="checkbox-checked" type="checkbox" name="checkbox-checked" checked>\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <form-boolean label="Checkbox Form Boolean Disabled" input-id="checkbox-disabled">\n' +
    '    <input id="checkbox-disabled" type="checkbox" name="checkbox-disabled" disabled>\n' +
    '  </form-boolean>\n' +
    '\n' +
    '  <form-boolean label="Checkbox Form Boolean Disabled Checked" input-id="checkbox-disabled-checked">\n' +
    '    <input id="checkbox-disabled-checked" type="checkbox" name="checkbox-disabled-checked" checked disabled>\n' +
    '  </form-boolean>\n' +
    '</page-section>\n' +
    '');
}]);
})();
