import React from 'react';
import { PageSection } from 'adc-ui-components';
import { coolGreyScale, actionBlue, secondaryPalette } from '../../helpers/colors';

const renderColors = (colors) => {
  const items = colors.map((color) => {
    const style = {
      backgroundColor: color.hex,
    };

    return (
      <div className="color-block-group__item">
        <div className="color-block" style={style}>
          <div className="color-block__name">
            {color.name}
:
            {color.hex}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="color-block-group">
      {items}
    </div>
  );
};

const Colors = () => (
  <PageSection>
    <h1>Colors</h1>
    <hr />

    <h2>Cool Grey Scale</h2>
    {renderColors(coolGreyScale)}

    <h2>Action Blue</h2>
    {renderColors(actionBlue)}

    <h2>Secondary Palette</h2>
    {renderColors(secondaryPalette)}


  </PageSection>
);

export default Colors;
