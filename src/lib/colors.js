import Values from 'values.js';

const swatch = (defaultColor) => {
  const colors = new Values(defaultColor);
  const weight = 10; // TODO: future functionality

  function getColorSwatch() {
    return colors.all(weight).map(({ type, hex }) => ({
      type, weight, hex,
    }));
  }

  return {
    getColorSwatch,
  };
};

export default swatch;
