import React, { Component } from 'react'
import PageSection from '../../components/PageSection'
import { brandColors, additionalColors, greys, coolGreys } from '../../helpers/colors'

class Colors extends Component {
  renderColors(colors) {
    const items = colors.map(color => {
      const style = {
        backgroundColor: color.hex
      };

      return (
        <div class="card-block-group__item">
          <div class="card-block" style={style}>
            <div class="card-block__name">
              {color.name}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div class="card-block-group">
        {items}
      </div>
    )
  }

  render() {
    return (
      <PageSection>
        <h1>Colors</h1>

        <h2>Brand Colors</h2>
        {this.renderColors(brandColors)}

        <h2>Additional Colors</h2>
        {this.renderColors(additionalColors)}

        <h2>Greys</h2>
        {this.renderColors(greys)}

        <h2>Cool Greys</h2>
        {this.renderColors(coolGreys)}
      </PageSection>
    )
  }
}

export default Colors;
