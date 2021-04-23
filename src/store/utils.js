export function createAppReducer(modules) {
  const childReducers = modules.map((module) => ({
    events: Object.values(module.events),
    reducer: module.reducer,
  }));

  const appReducer = (prevState, event) => {
    const targetModule = childReducers.find((module) => module.events.includes(event.type));
    return targetModule.reducer(prevState, event);
  };

  return appReducer;
}

export const appState = (modules) => modules.reduce((currentState, { state }) => ({
  ...currentState,
  ...state,
}), {});

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

function createCombinedStore(modules) {
  return createStore(createAppReducer(modules), appState(modules));
}

export { createStore, createCombinedStore };
