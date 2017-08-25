(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/components/card.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Card</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '  <h2>Default Card</h2>\n' +
    '  <card>\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card Secondary</h2>\n' +
    '  <card classes="card--secondary">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card Success</h2>\n' +
    '  <card classes="card--success">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card Info</h2>\n' +
    '  <card classes="card--info">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card Danger</h2>\n' +
    '  <card classes="card--danger">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card Warning</h2>\n' +
    '  <card classes="card--warning">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card with action</h2>\n' +
    '  <card has-action="true">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card with action right</h2>\n' +
    '  <card classes="card--action-right" has-action="true">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card with action right at 768</h2>\n' +
    '  <card classes="card--action-right-at-768" has-action="true">\n' +
    '    <div class="hgroup">\n' +
    '      <h2 class="body2">Card Content</h2>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card with date and action right at 768</h2>\n' +
    '  <card classes="card--has-date card--action-right-at-768" has-action="true" has-date="true">\n' +
    '    <div class="hgroup">\n' +
    '      <h4 class="body2">Card Content</h4>\n' +
    '      <p>More card content</p>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Card with media and action right at 768</h2>\n' +
    '  <card classes="card--has-media card--action-right-at-768" has-media="true">\n' +
    '    <div class="hgroup">\n' +
    '      <h4 class="body2">Card Content</h4>\n' +
    '      <p>More card content</p>\n' +
    '      <div class="action">\n' +
    '        <a href="#">Link</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </card>\n' +
    '\n' +
    '  <h2>Common Tasks (cards within grid)</h2>\n' +
    '  <div class="ma-grid">\n' +
    '    <div class="ma-grid__col--1of3">\n' +
    '      <card classes="card--has-media card--action-right-at-768" has-media="true">\n' +
    '        <div class="hgroup">\n' +
    '          <h4 class="body2">Card Content</h4>\n' +
    '          <p>More card content</p>\n' +
    '          <div class="action">\n' +
    '            <a href="#">Link</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </card>\n' +
    '    </div>\n' +
    '    <div class="ma-grid__col--1of3">\n' +
    '      <card classes="card--has-media card--action-right-at-768" has-media="true">\n' +
    '        <div class="hgroup">\n' +
    '          <h4 class="body2">Card Content</h4>\n' +
    '          <p>More card content</p>\n' +
    '          <div class="action">\n' +
    '            <a href="#">Link</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </card>\n' +
    '    </div>\n' +
    '    <div class="ma-grid__col--1of3">\n' +
    '      <card classes="card--has-media card--action-right-at-768" has-media="true">\n' +
    '        <div class="hgroup">\n' +
    '          <h4 class="body2">Card Content</h4>\n' +
    '          <p>More card content</p>\n' +
    '          <div class="action">\n' +
    '            <a href="#">Link</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </card>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</page-section>\n' +
    '');
}]);
})();
