(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/button.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Buttons</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Default Button</h2>\n' +
    '  <a class="button" href="#">Button Text</a>\n' +
    '  <a class="button pseudo-class-hover" href="#">Hover Button Text</a>\n' +
    '  <a class="button pseudo-class-hover pseudo-class-active" href="#">Active Button Text</a>\n' +
    '  <button disabled class="button" type="button">Disabled Button Text</button>\n' +
    '  <a class="button is-loading" href="#">Loading Button Text</a>\n' +
    '\n' +
    '  <h2>Primary Button</h2>\n' +
    '  <a class="button button--primary" href="#">Button Text</a>\n' +
    '  <a class="button button--primary pseudo-class-hover" href="#">Hover Button Text</a>\n' +
    '  <a class="button button--primary pseudo-class-hover pseudo-class-active" href="#">Active Button Text</a>\n' +
    '  <button disabled class="button button--primary button--utility" type="button">Disabled Button Text</button>\n' +
    '  <a class="button button--primary is-loading" href="#">Loading Button Text</a>\n' +
    '\n' +
    '  <h2>Utility Button</h2>\n' +
    '  <a class="button button--utility" href="#">Button Text</a>\n' +
    '  <a class="button button--utility pseudo-class-hover" href="#">Hover Button Text</a>\n' +
    '  <a class="button button--utility pseudo-class-hover pseudo-class-active" href="#">Active Button Text</a>\n' +
    '  <button disabled class="button button--utility" type="button">Disabled Button Text</button>\n' +
    '  <a class="button button--utility is-loading" href="#">Loading Button Text</a>\n' +
    '\n' +
    '  <h2>Primary Utility Button</h2>\n' +
    '  <a class="button button--primary button--utility" href="#">Button Text</a>\n' +
    '  <a class="button button--primary button--utility pseudo-class-hover" href="#">Hover Button Text</a>\n' +
    '  <a class="button button--primary button--utility pseudo-class-hover pseudo-class-active" href="#">Active Button Text</a>\n' +
    '  <button disabled class="button button--primary button--utility" type="button">Disabled Button Text</button>\n' +
    '  <a class="button button--primary button--utility is-loading" href="#">Loading Button Text</a>\n' +
    '\n' +
    '  <h2>Small Button</h2>\n' +
    '  <button class="button button--small" href="#">Button Text</button>\n' +
    '\n' +
    '  <h2>Large Button</h2>\n' +
    '  <button class="button button--large" href="#">Button Text</button>\n' +
    '\n' +
    '  <h2>Full Width Button</h2>\n' +
    '  <button class="button button--full-width" href="#">Button Text</button>\n' +
    '\n' +
    '  <h2>Text Button</h2>\n' +
    '  <button class="button button--text" type="button">Button Text</button>\n' +
    '  <a class="button button--text" href="#">Button Text</a>\n' +
    '  <button class="button button--text body1" type="button">Button Text (body1)</button>\n' +
    '</page-section>\n' +
    '');
}]);
})();
