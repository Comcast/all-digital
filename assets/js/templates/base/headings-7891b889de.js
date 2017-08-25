(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/base/headings.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Headings</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <p class="display1">Display 1</p>\n' +
    '  <p class="display2">Display 2</p>\n' +
    '  <p class="display3">Display 3</p>\n' +
    '  <p class="heading1">Heading 1</p>\n' +
    '  <p class="heading2">Heading 2</p>\n' +
    '  <p class="heading3">Heading 3</p>\n' +
    '  <p class="body1">Body 1</p>\n' +
    '  <p class="body2">Body 2</p>\n' +
    '  <p class="body3">Body 3</p>\n' +
    '  <p class="body4">Body 4</p>\n' +
    '  <p class="heading4">Heading 4</p>\n' +
    '  <p class="heading5">Heading 5</p>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <div class="hgroup hgroup--spaced">\n' +
    '    <p class="heading5">Heading 5</p>\n' +
    '    <p class="heading1">Heading 1</p>\n' +
    '    <p class="body1">Body 1</p>\n' +
    '  </div>\n' +
    '\n' +
    '  <a class="button button--primary" href="#">Button</a>\n' +
    '\n' +
    '  <div class="hgroup hgroup--spaced">\n' +
    '    <p class="heading2">Heading 2</p>\n' +
    '    <p class="body2">Body 2</p>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="hgroup">\n' +
    '    <p class="heading3">Heading 3</p>\n' +
    '    <p class="body3">Body 3</p>\n' +
    '  </div>\n' +
    '\n' +
    '  <p>Here is some text</p>\n' +
    '\n' +
    '  <div class="hgroup">\n' +
    '    <p class="body2">Body 2</p>\n' +
    '    <p class="body3">Body 3</p>\n' +
    '    <p class="body3"><a href="#">Body 3 Medium</a></p>\n' +
    '  </div>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="display1">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="display2">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="display3">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="heading1">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="heading2">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="heading3">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="body1">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="body2">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="body3">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="body4">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="heading4">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h1 class="heading5">Grumpy wizards make toxic brew for the evil Queen and Jack.</h1>\n' +
    '</page-section>\n' +
    '');
}]);
})();
