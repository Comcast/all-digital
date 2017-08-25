(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/form-control.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Form Boolean</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Default Form Controls</h2>\n' +
    '  <form-control label="Form Control Text" input-id="text">\n' +
    '    <input type="text" id="text" placeholder="placeholder">\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control label="Form Control Select" input-id="select">\n' +
    '    <select name="select" id="select">\n' +
    '      <option>Text</option>\n' +
    '    </select>\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control label="Form Control Textarea" input-id="textarea">\n' +
    '    <textarea id="textarea"></textarea>\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control label="Form Control Number" input-id="number">\n' +
    '    <input type="number" id="number" placeholder="placeholder">\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control label="Form Control Search" input-id="search">\n' +
    '    <input type="search" id="search" placeholder="placeholder">\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control classes="form-control--inline" label="Form Control Inline Textbox" input-id="inlineText">\n' +
    '    <input type="text" id="inlineText" placeholder="placeholder">\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control classes="form-control--inline" label="Form Control Inline Textarea" input-id="inlineTextarea">\n' +
    '      <textarea id="inlineTextarea"></textarea>\n' +
    '      <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control classes="form-control--inline-at-768" label="Form Control Inline at 768 Textbox" input-id="inlineText768">\n' +
    '    <input type="text" id="inlineText768" placeholder="placeholder">\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '  <form-control classes="form-control--inline-at-768" label="Form Control Inline at 768 Textarea" input-id="inlineTextarea768">\n' +
    '    <textarea id="inlineTextarea768"></textarea>\n' +
    '    <span class="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n' +
    '  </form-control>\n' +
    '\n' +
    '</page-section>\n' +
    '');
}]);
})();
