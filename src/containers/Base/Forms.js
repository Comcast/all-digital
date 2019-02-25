import React from 'react';
import { PageSection } from 'adc-ui-components';

const Forms = () => (
  <PageSection>
    <h1>Forms</h1>
    <hr />

    <form>
      <fieldset>
        <legend>Legend</legend>

        <label htmlFor="text">
          Text Input
          <abbr title="Required">*</abbr>
        </label>
        <input id="text" type="text" placeholder="Text Placeholder" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <label htmlFor="web_address">Web Address</label>
        <input id="web_address" type="url" />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" />

        <label htmlFor="number">Number</label>
        <input id="number" type="number" />

        <label htmlFor="date">Date</label>
        <input id="date" type="date" />

        <label htmlFor="tel">Tel</label>
        <input id="tel" type="tel" />

        <label htmlFor="search">Search</label>
        <input id="search" type="search" />
        <input id="password" type="submit" className="search" />

        <label htmlFor="textarea">Textarea</label>
        <textarea id="textarea" rows="8" cols="48" />

        <label htmlFor="checkbox">Single Checkbox</label>
        <label htmlFor="checkbox" className="check">
          <input id="checkbox" type="checkbox" className="checkbox" />
          Label
        </label>

        <label htmlFor="select">Select</label>
        <select id="select">
          <optgroup label="Option Group">
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </optgroup>
        </select>

        <fieldset className="options">
          <legend>
            Checkbox
            <abbr title="Required">*</abbr>
          </legend>
          <label htmlFor="checkbox1">
            <input id="checkbox1" name="checkbox" type="checkbox" checked="checked" />
            Choice A
          </label>
          <label htmlFor="checkbox2">
            <input id="checkbox2" name="checkbox" type="checkbox" />
            Choice B
          </label>
          <label htmlFor="checkbox3">
            <input id="checkbox3" name="checkbox" type="checkbox" />
            Choice C
          </label>
        </fieldset>

        <fieldset className="options">
          <legend>Radio</legend>
          <label htmlFor="radio1">
            <input id="radio1" name="radio" type="radio" className="radio" checked="checked" />
            Option 1
          </label>
          <label htmlFor="radio2">
            <input id="radio2" name="radio" type="radio" className="radio" />
            Option 2
          </label>
        </fieldset>

        <input type="submit" value="Post Comment" />
        <input type="button" value="Preview" />
        <a href="##">Cancel</a>

      </fieldset>
    </form>
  </PageSection>
);

export default Forms;
