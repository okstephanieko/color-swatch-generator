import store, { bindActionCreators } from '../store';
import { actions } from '../store/modules/swatch';

function changeBase(colorString) {
  return { type: actions.CHANGE_BASE, payload: colorString };
}

function changeWeight(weightValue) {
  return { type: actions.CHANGE_WEIGHT, payload: weightValue };
}

export default bindActionCreators({
  changeBase,
  changeWeight,
}, store.dispatch);
