import { assert } from 'chai';

import { appState, createAppReducer } from './utils';

describe('store utils', () => {
  const module1 = {
    state: { completed: false },
    reducer: (prevState, event) => (event.type === 'completed'
      ? { ...prevState, completed: true }
      : prevState),
    events: {
      COMPLETE: 'completed',
    },
  };

  const module2 = {
    state: { submitted: false },
    reducer: (prevState, event) => (event.type === 'completed'
      ? { ...prevState, completed: true }
      : prevState),
    events: {
      SUBMIT: 'submitted',
    },
  };

  describe('state', () => {
    const state = appState([module1, module2]);

    it('store states from multiple modules in one state object', () => {
      assert.hasAllKeys(state, ['completed', 'submitted']);
    });

    it('combined state returns correct value with key', () => {
      assert.strictEqual(state.completed, module1.state.completed, 'strictly equal 1');
      assert.strictEqual(state.submitted, module2.state.submitted, 'strictly equal');
    });
  });

  describe('reducer', () => {
    const reducer = createAppReducer([module1, module2]);
    const event = {
      type: module1.events.COMPLETE,
      payload: {},
    };

    it('reducer returns correct state', () => {
      const newState = reducer(appState([module1, module2]), event);
      assert.isTrue(newState.completed);
    });
  });
});
