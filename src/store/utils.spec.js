import { assert } from 'chai';

import { createStore } from './utils';

describe('store utils', () => {
  const events = {
    COMPLETE: 'completed',
  };
  const reducer = (prevState, event) => ((event.type === events.COMPLETE)
    ? { ...prevState, completed: !prevState.completed }
    : prevState
  );

  const store = createStore(reducer, { completed: false });

  it('store states', () => {
    assert.isFalse(store.state.completed);
  });

  describe('dispatch', () => {
    it('state toggled upon dispatch', () => {
      store.dispatch({ type: events.COMPLETE });
      assert.isTrue(store.state.completed);
    });
  });
});
