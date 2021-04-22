function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = {};

  function dispatch(eventType, payload) {
    state = reducer(state, { type: eventType, payload });
    if (Object.keys(listeners).includes(eventType)) {
      listeners[eventType].forEach((cb) => cb());
    }
  }

  function subscribe(eventType, callback) {
    listeners[eventType] = (Object.keys(listeners).includes(eventType))
      ? [...listeners[eventType], callback]
      : [callback];

    return function unsubscribe() {
      const index = listeners[eventType].indexOf(callback);
      listeners[eventType].splice(index, 1);
    };
  }

  return {
    get state() {
      return state;
    },
    dispatch,
    subscribe,
  };
}

export default createStore;
