import Values from 'values.js';

const swatch = (value) => {
  const values = new Values(value);

  return {
    type: values.type,
    weight: values.weight,
    hex: `#${values.hex}`,
    all(weightValue) {
      return values.all(weightValue).map((child) => ({
        type: child.type,
        weight: child.weight,
        hex: `#${child.hex}`,
        brightness: child.getBrightness(),
      }));
    },
    brightness: values.getBrightness(),
  };
};

export default swatch;
