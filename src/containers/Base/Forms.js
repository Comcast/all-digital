import React, { Component } from 'react'
import { PageSection } from 'all-digital-components'

class Forms extends Component {
  render() {
    return (
      <PageSection>
        <h1>Forms</h1>
        <hr />

        <form>
          <fieldset>
            <legend>Legend</legend>

            <label for="text">Text Input <abbr title="Required">*</abbr></label>
            <input id="text" type="text" placeholder="Text Placeholder" />

            <label for="password">Password</label>
            <input id="password" type="password" />

            <label for="web_address">Web Address</label>
            <input id="web_address" type="url" />

            <label for="email">Email Address</label>
            <input id="email" type="email" />

            <label for="number">Number</label>
            <input id="number" type="number" />

            <label for="date">Date</label>
            <input id="date" type="date" />

            <label for="tel">Tel</label>
            <input id="tel" type="tel" />

            <label for="search">Search</label>
            <input id="search" type="search" />
            <input id="password" type="submit" class="search" />

            <label for="textarea">Textarea</label>
            <textarea id="textarea" rows="8" cols="48"></textarea>

            <label for="checkbox">Single Checkbox</label>
            <label for="checkbox" class="check"><input id="checkbox" type="checkbox" class="checkbox" />Label</label>

            <label for="select">Select</label>
            <select id="select">
              <optgroup label="Option Group">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </optgroup>
            </select>

            <fieldset class="options">
              <legend>Checkbox <abbr title="Required">*</abbr></legend>
              <label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked" />Choice A</label>
              <label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox" />Choice B</label>
              <label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox" />Choice C</label>
            </fieldset>

            <fieldset class="options">
              <legend>Radio</legend>
              <label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked" />Option 1</label>
              <label for="radio2"><input id="radio2" name="radio" type="radio" class="radio" />Option 2</label>
            </fieldset>

            <input type="submit" value="Post Comment" />
            <input type="button" value="Preview" />
            <a href="##">Cancel</a>

          </fieldset>
        </form>
      </PageSection>
    )
  }
}

export default Forms;
