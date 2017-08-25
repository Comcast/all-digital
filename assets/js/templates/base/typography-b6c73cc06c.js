(function(module) {
try {
  module = angular.module('all_digital');
} catch (e) {
  module = angular.module('all_digital', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/base/typography.html',
    '<page-section classes="page-section--centered-text page-section--medium ui-blue">\n' +
    '  <h1 class="display3">Typography</h1>\n' +
    '</page-section>\n' +
    '\n' +
    '<page-section>\n' +
    '\n' +
    '  <h2>Headings</h2>\n' +
    '  <h1>Header one</h1>\n' +
    '  <h2>Header two</h2>\n' +
    '  <h3>Header three</h3>\n' +
    '  <h4>Header four</h4>\n' +
    '  <h5>Header five</h5>\n' +
    '  <h6>Header six</h6>\n' +
    '  <h2>Blockquotes</h2>\n' +
    '\n' +
    '  <p>Single line blockquote:</p>\n' +
    '  <blockquote><p>Stay hungry. Stay foolish.</p></blockquote>\n' +
    '\n' +
    '  <p>Multi line blockquote with a cite reference:</p>\n' +
    '  <blockquote><p>People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things. <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite></p></blockquote>\n' +
    '\n' +
    '  <h2>Tables</h2>\n' +
    '  <table>\n' +
    '    <tbody>\n' +
    '      <tr>\n' +
    '        <th>Employee</th>\n' +
    '        <th class="views">Salary</th>\n' +
    '        <th></th>\n' +
    '      </tr>\n' +
    '      <tr class="odd">\n' +
    '        <td><a href="http://john.do/">John Saddington</a></td>\n' +
    '        <td>$1</td>\n' +
    '        <td>Because that’s all Steve Job’ needed for a salary.</td>\n' +
    '      </tr>\n' +
    '      <tr class="even">\n' +
    '        <td><a href="http://tommcfarlin.com/">Tom McFarlin</a></td>\n' +
    '        <td>$100K</td>\n' +
    '        <td>For all the blogging he does.</td>\n' +
    '      </tr>\n' +
    '      <tr class="odd">\n' +
    '        <td><a href="http://jarederickson.com/">Jared Erickson</a></td>\n' +
    '        <td>$100M</td>\n' +
    '        <td>Pictures are worth a thousand words, right? So Tom x 1,000.</td>\n' +
    '      </tr>\n' +
    '      <tr class="even">\n' +
    '        <td><a href="http://chrisam.es/">Chris Ames</a></td>\n' +
    '        <td>$100B</td>\n' +
    '        <td>With hair like that?! Enough said…</td>\n' +
    '      </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <h2>Definition Lists</h2>\n' +
    '  <dl>\n' +
    '    <dt>Definition List Title</dt>\n' +
    '    <dd>Definition list division.</dd>\n' +
    '    <dt>Startup</dt>\n' +
    '    <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>\n' +
    '    <dt>#dowork</dt>\n' +
    '    <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>\n' +
    '    <dt>Do It Live</dt>\n' +
    '    <dd>I’ll let Bill O’Reilly will <a title="We\'ll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</dd>\n' +
    '  </dl>\n' +
    '\n' +
    '  <h2>Unordered Lists (Nested)</h2>\n' +
    '  <ul>\n' +
    '    <li>List item one\n' +
    '      <ul>\n' +
    '        <li>List item one\n' +
    '          <ul>\n' +
    '            <li>List item one</li>\n' +
    '            <li>List item two</li>\n' +
    '            <li>List item three</li>\n' +
    '            <li>List item four</li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li>List item two</li>\n' +
    '        <li>List item three</li>\n' +
    '        <li>List item four</li>\n' +
    '      </ul>\n' +
    '    </li>\n' +
    '    <li>List item two</li>\n' +
    '    <li>List item three</li>\n' +
    '    <li>List item four</li>\n' +
    '  </ul>\n' +
    '\n' +
    '  <h2>Ordered List (Nested)</h2>\n' +
    '  <ol>\n' +
    '    <li>List item one\n' +
    '      <ol>\n' +
    '        <li>List item one\n' +
    '          <ol>\n' +
    '            <li>List item one</li>\n' +
    '            <li>List item two</li>\n' +
    '            <li>List item three</li>\n' +
    '            <li>List item four</li>\n' +
    '          </ol>\n' +
    '        </li>\n' +
    '        <li>List item two</li>\n' +
    '        <li>List item three</li>\n' +
    '        <li>List item four</li>\n' +
    '      </ol>\n' +
    '    </li>\n' +
    '    <li>List item two</li>\n' +
    '    <li>List item three</li>\n' +
    '    <li>List item four</li>\n' +
    '  </ol>\n' +
    '\n' +
    '  <h2>HTML Tags</h2>\n' +
    '  <p>These supported tags come from the WordPress.com code <a title="Code" href="http://en.support.wordpress.com/code/">FAQ</a>.</p>\n' +
    '\n' +
    '  <p><strong>Address Tag</strong></p>\n' +
    '  <address>1 Infinite Loop<br>\n' +
    '  Cupertino, CA 95014<br>\n' +
    '  United States</address>\n' +
    '\n' +
    '  <p><strong>Anchor Tag (aka. Link)</strong></p>\n' +
    '  <p>This is an example of a <a title="Apple" href="http://apple.com">link</a>.</p>\n' +
    '\n' +
    '  <p><strong>Abbreviation Tag</strong></p>\n' +
    '  <p>The abbreviation <abbr title="Seriously">srsly</abbr> stands for “seriously”.</p>\n' +
    '\n' +
    '  <p><strong>Acronym Tag</strong></p>\n' +
    '  <p>The acronym <acronym title="For The Win">ftw</acronym> stands for “for the win”.</p>\n' +
    '\n' +
    '  <p><strong>Big Tag</strong></p>\n' +
    '  <p>These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.</p>\n' +
    '\n' +
    '  <p><strong>Cite Tag</strong></p>\n' +
    '  <p>“Code is poetry.” –<cite>Automattic</cite></p>\n' +
    '\n' +
    '  <p><strong>Code Tag</strong></p>\n' +
    '  <p>You will learn later on in these tests that <code>word-wrap: break-word;</code> will be your best friend.</p>\n' +
    '\n' +
    '  <p><strong>Delete Tag</strong></p>\n' +
    '  <p>This tag will let you <del>strikeout text</del>, but this tag is no longer supported in HTML5 (use the <code>&lt;strike&gt;</code> instead).</p>\n' +
    '\n' +
    '  <p><strong>Emphasize Tag</strong></p>\n' +
    '  <p>The emphasize tag should <em>italicize</em> text.</p>\n' +
    '\n' +
    '  <p><strong>Insert Tag</strong></p>\n' +
    '  <p>This tag should denote <ins>inserted</ins> text.</p>\n' +
    '\n' +
    '  <p><strong>Keyboard Tag</strong></p>\n' +
    '  <p>This scarsly known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>\n' +
    '\n' +
    '  <p><strong>Preformatted Tag</strong></p>\n' +
    '  <p>This tag styles large blocks of code.</p>\n' +
    '  <pre>.post-title {\n' +
    '  	margin: 0 0 5px;\n' +
    '  	font-weight: bold;\n' +
    '  	font-size: 38px;\n' +
    '  	line-height: 1.2;\n' +
    '  }</pre>\n' +
    '\n' +
    '  <p><strong>Quote Tag</strong></p>\n' +
    '  <p><q>Developers, developers, developers…</q> –Steve Ballmer</p>\n' +
    '\n' +
    '  <p><strong>Strong Tag</strong></p>\n' +
    '  <p>This tag shows <strong>bold<strong> text.</strong></strong></p>\n' +
    '\n' +
    '  <p><strong>Subscript Tag</strong></p>\n' +
    '  <p>Getting our science styling on with H<sub>2</sub>O, which should push the “2″ down.</p>\n' +
    '\n' +
    '  <p><strong>Superscript Tag</strong></p>\n' +
    '  <p>Still sticking with science and Albert Einstein’s&nbsp;E = MC<sup>2</sup>, which should lift the “2″ up.</p>\n' +
    '\n' +
    '  <p><strong>Teletype Tag</strong></p>\n' +
    '  <p>This rarely used tag emulates <tt>teletype text</tt>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>\n' +
    '\n' +
    '  <p><strong>Variable Tag</strong></p>\n' +
    '  <p>This allows you to denote <var>variables</var>.</p>\n' +
    '\n' +
    '</page-section>\n' +
    '');
}]);
})();
