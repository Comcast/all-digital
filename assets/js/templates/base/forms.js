(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/base/forms.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Forms</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '\n' +
    '  <form>\n' +
    '    <fieldset>\n' +
    '      <legend>Legend</legend>\n' +
    '\n' +
    '      <label for="text">Text Input <abbr title="Required">*</abbr></label>\n' +
    '      <input id="text" type="text" placeholder="Text Placeholder">\n' +
    '\n' +
    '      <label for="password">Password</label>\n' +
    '      <input id="password" type="password">\n' +
    '\n' +
    '      <label for="web_address">Web Address</label>\n' +
    '      <input id="web_address" type="url">\n' +
    '\n' +
    '      <label for="email">Email Address</label>\n' +
    '      <input id="email" type="email">\n' +
    '\n' +
    '      <label for="number">Number</label>\n' +
    '      <input id="number" type="number">\n' +
    '\n' +
    '      <label for="date">Date</label>\n' +
    '      <input id="date" type="date">\n' +
    '\n' +
    '      <label for="tel">Tel</label>\n' +
    '      <input id="tel" type="tel">\n' +
    '\n' +
    '      <label for="search">Search</label>\n' +
    '      <input id="search" type="search"><input id="password" type="submit" class="search">\n' +
    '\n' +
    '      <label for="textarea">Textarea</label>\n' +
    '      <textarea id="textarea" rows="8" cols="48"></textarea>\n' +
    '\n' +
    '      <label for="checkbox">Single Checkbox</label>\n' +
    '      <label for="checkbox" class="check"><input id="checkbox" type="checkbox" class="checkbox">Label</label>\n' +
    '\n' +
    '      <label for="select">Select</label>\n' +
    '      <select id="select">\n' +
    '        <optgroup label="Option Group">\n' +
    '          <option>Option One</option>\n' +
    '          <option>Option Two</option>\n' +
    '          <option>Option Three</option>\n' +
    '        </optgroup>\n' +
    '      </select>\n' +
    '\n' +
    '      <fieldset class="options">\n' +
    '        <legend>Checkbox <abbr title="Required">*</abbr></legend>\n' +
    '        <label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked">Choice A</label>\n' +
    '        <label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox">Choice B</label>\n' +
    '        <label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox">Choice C</label>\n' +
    '      </fieldset>\n' +
    '\n' +
    '      <fieldset class="options">\n' +
    '        <legend>Radio</legend>\n' +
    '        <label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked">Option 1</label>\n' +
    '        <label for="radio2"><input id="radio2" name="radio" type="radio" class="radio">Option 2</label>\n' +
    '      </fieldset>\n' +
    '\n' +
    '      <input type="submit" value="Post Comment">\n' +
    '      <input type="button" value="Preview">\n' +
    '      <a href="##">Cancel</a>\n' +
    '\n' +
    '    </fieldset>\n' +
    '  </form>\n' +
    '\n' +
    '</page-section>\n' +
    '');
}]);
})();
