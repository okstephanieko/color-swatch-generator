const actions = {
  CHANGE_BASE: 'baseChanged',
  CHANGE_WEIGHT: 'weightChanged',
};

const initialState = {
  base: '#4a90e2',
  weight: 15,
};

const reducers = {
  [actions.CHANGE_BASE]: (state, payload) => ({
    ...state,
    base: payload,
  }),
  [actions.CHANGE_WEIGHT]: (state, payload) => ({
    ...state,
    weight: payload,
  }),
};

export default { name: 'swatch', initialState, reducers };
export { actions };
