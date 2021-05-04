import Values from 'values.js';

import { bindActionCreators } from './lib/store';

import store from './store';
import { actions } from './store/swatch';

function changeBase(colorString) {
  return { type: actions.CHANGE_BASE, payload: colorString };
}

function changeWeight(weightValue) {
  return { type: actions.CHANGE_WEIGHT, payload: weightValue };
}

function getSwatch(value, weightValue) {
  const values = new Values(value);

  return values.all(weightValue).map((child) => ({
    type: child.type,
    weight: child.weight,
    hex: `#${child.hex}`,
    brightness: child.getBrightness(),
  }));
}

const services = {
  ...bindActionCreators({
    changeBase,
    changeWeight,
  }, store.dispatch),
  getSwatch,
};

export default services;
