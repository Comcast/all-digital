import React, { Component } from 'react'
import { PageSection, FormBoolean } from 'all-digital-components'

class FormBooleans extends Component {
  render() {
    return (
      <PageSection>
        <h1>Form Boolean</h1>
        <hr />

        <h2>Form Control Radio</h2>
        <FormBoolean label="Radio Form Boolean" inputId="radio">
          <input id="radio" type="radio" name="radio" />
        </FormBoolean>

        <FormBoolean label="Radio Form Boolean" inputId="radio-checked">
          <input id="radio-checked" type="radio" name="radio-checked" checked />
        </FormBoolean>

        <FormBoolean label="Radio Form Boolean Disabled" inputId="radio-disabled">
          <input id="radio-disabled" type="radio" name="radio-disabled" disabled />
        </FormBoolean>

        <FormBoolean label="Radio Form Boolean Disabled Checked" inputId="radio-disabled-checked">
          <input id="radio-disabled-checked" type="radio" name="radio-disabled-checked" checked disabled />
        </FormBoolean>

        <h2>Form Control Checkbox</h2>
        <FormBoolean label="Checkbox Form Boolean" inputId="checkbox">
          <input id="checkbox" type="checkbox" name="checkbox" />
        </FormBoolean>

        <FormBoolean label="Checkbox Form Boolean Checked" inputId="checkbox-checked">
          <input id="checkbox-checked" type="checkbox" name="checkbox-checked" checked />
        </FormBoolean>

        <FormBoolean label="Checkbox Form Boolean Disabled" inputId="checkbox-disabled">
          <input id="checkbox-disabled" type="checkbox" name="checkbox-disabled" disabled />
        </FormBoolean>

        <FormBoolean label="Checkbox Form Boolean Disabled Checked" inputId="checkbox-disabled-checked">
          <input id="checkbox-disabled-checked" type="checkbox" name="checkbox-disabled-checked" checked disabled />
        </FormBoolean>
      </PageSection>
    )
  }
}

export default FormBooleans;
