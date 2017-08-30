import React, { Component } from 'react'
import PageSection from '../../components/PageSection'

class Typography extends Component {
  render() {
    let preblock = `.post-title {
      margin: 0 0 5px;
      font-weight: bold;
      font-size: 38px;
      line-height: 1.2;
    }`;

    return (
      <PageSection>
        <h1>Typography</h1>
        <hr />

        <h2>Headings</h2>
        <h1>Header one</h1>
        <h2>Header two</h2>
        <h3>Header three</h3>
        <h4>Header four</h4>
        <h5>Header five</h5>
        <h6>Header six</h6>
        <h2>Blockquotes</h2>

        <p>Single line blockquote:</p>
        <blockquote><p>Stay hungry. Stay foolish.</p></blockquote>

        <p>Multi line blockquote with a cite reference:</p>
        <blockquote><p>People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things. <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite></p></blockquote>

        <h2>Tables</h2>
        <table>
          <tbody>
            <tr>
              <th>Employee</th>
              <th class="views">Salary</th>
              <th></th>
            </tr>
            <tr class="odd">
              <td><a href="http://john.do/">John Saddington</a></td>
              <td>$1</td>
              <td>Because that’s all Steve Job’ needed for a salary.</td>
            </tr>
            <tr class="even">
              <td><a href="http://tommcfarlin.com/">Tom McFarlin</a></td>
              <td>$100K</td>
              <td>For all the blogging he does.</td>
            </tr>
            <tr class="odd">
              <td><a href="http://jarederickson.com/">Jared Erickson</a></td>
              <td>$100M</td>
              <td>Pictures are worth a thousand words, right? So Tom x 1,000.</td>
            </tr>
            <tr class="even">
              <td><a href="http://chrisam.es/">Chris Ames</a></td>
              <td>$100B</td>
              <td>With hair like that?! Enough said…</td>
            </tr>
          </tbody>
        </table>

        <h2>Definition Lists</h2>
        <dl>
          <dt>Definition List Title</dt>
          <dd>Definition list division.</dd>
          <dt>Startup</dt>
          <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
          <dt>#dowork</dt>
          <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>
          <dt>Do It Live</dt>
          <dd>I’ll let Bill O’Reilly will <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</dd>
        </dl>

        <h2>Unordered Lists (Nested)</h2>
        <ul>
          <li>List item one
            <ul>
              <li>List item one
                <ul>
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ul>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ul>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ul>

        <h2>Ordered List (Nested)</h2>
        <ol>
          <li>List item one
            <ol>
              <li>List item one
                <ol>
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ol>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ol>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ol>

        <h2>HTML Tags</h2>
        <p>These supported tags come from the WordPress.com code <a title="Code" href="http://en.support.wordpress.com/code/">FAQ</a>.</p>

        <p><strong>Address Tag</strong></p>
        <address>1 Infinite Loop<br />
        Cupertino, CA 95014<br />
        United States</address>

        <p><strong>Anchor Tag (aka. Link)</strong></p>
        <p>This is an example of a <a title="Apple" href="http://apple.com">link</a>.</p>

        <p><strong>Abbreviation Tag</strong></p>
        <p>The abbreviation <abbr title="Seriously">srsly</abbr> stands for “seriously”.</p>

        <p><strong>Acronym Tag</strong></p>
        <p>The acronym <acronym title="For The Win">ftw</acronym> stands for “for the win”.</p>

        <p><strong>Big Tag</strong></p>
        <p>These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.</p>

        <p><strong>Cite Tag</strong></p>
        <p>“Code is poetry.” –<cite>Automattic</cite></p>

        <p><strong>Code Tag</strong></p>
        <p>You will learn later on in these tests that <code>word-wrap: break-word;</code> will be your best friend.</p>

        <p><strong>Delete Tag</strong></p>
        <p>This tag will let you <del>strikeout text</del>, but this tag is no longer supported in HTML5 (use the <code>&lt;strike&gt;</code> instead).</p>

        <p><strong>Emphasize Tag</strong></p>
        <p>The emphasize tag should <em>italicize</em> text.</p>

        <p><strong>Insert Tag</strong></p>
        <p>This tag should denote <ins>inserted</ins> text.</p>

        <p><strong>Keyboard Tag</strong></p>
        <p>This scarsly known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>

        <p><strong>Preformatted Tag</strong></p>
        <p>This tag styles large blocks of code.</p>
        <pre>{preblock}</pre>

        <p><strong>Quote Tag</strong></p>
        <p><q>Developers, developers, developers…</q> –Steve Ballmer</p>

        <p><strong>Strong Tag</strong></p>
        <p>This tag shows <strong>bold<strong> text.</strong></strong></p>

        <p><strong>Subscript Tag</strong></p>
        <p>Getting our science styling on with H<sub>2</sub>O, which should push the “2″ down.</p>

        <p><strong>Superscript Tag</strong></p>
        <p>Still sticking with science and Albert Einstein’s&nbsp;E = MC<sup>2</sup>, which should lift the “2″ up.</p>

        <p><strong>Teletype Tag</strong></p>
        <p>This rarely used tag emulates <tt>teletype text</tt>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>

        <p><strong>Variable Tag</strong></p>
        <p>This allows you to denote <var>variables</var>.</p>

      </PageSection>
    )
  }
}

export default Typography;
