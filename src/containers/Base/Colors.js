import React, { Component } from 'react'
import PageSection from '../../components/PageSection'
import { coolGreyScale, actionBlue, secondaryPalette } from '../../helpers/colors'

class Colors extends Component {
  renderColors(colors) {
    const items = colors.map(color => {
      const style = {
        backgroundColor: color.hex
      };

      return (
        <div class="color-block-group__item">
          <div class="color-block" style={style}>
            <div class="color-block__name">
              {color.name}: {color.hex}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div class="color-block-group">
        {items}
      </div>
    )
  }

  render() {
    return (
      <PageSection>
        <h1>Colors</h1>
        <hr />

        <h2>Cool Grey Scale</h2>
        {this.renderColors(coolGreyScale)}

        <h2>Action Blue</h2>
        {this.renderColors(actionBlue)}

        <h2>Secondary Palette</h2>
        {this.renderColors(secondaryPalette)}


      </PageSection>
    )
  }
}

export default Colors;
