import Values from 'values.js';

const colors = (defaultColor) => {
  const model = new Values(defaultColor);
  const weight = 10; // TODO: future functionality

  function setBaseColor(base) {
    return model.setColor(base).hex;
  }

  function getColorSwatch() {
    return model.all(weight).map(({ type, hex }) => ({
      type, weight, hex,
    }));
  }

  return {
    setBaseColor,
    getColorSwatch,
  };
};

export default colors;
