import Values from 'values.js';

const swatch = (defaultColor) => {
  const colors = new Values(defaultColor);
  const weight = 10; // TODO: future functionality

  function setBaseColor(base) {
    return colors.setColor(base).hex;
  }

  function getColorSwatch() {
    return colors.all(weight).map(({ type, hex }) => ({
      type, weight, hex,
    }));
  }

  return {
    setBaseColor,
    getColorSwatch,
  };
};

export default swatch;
