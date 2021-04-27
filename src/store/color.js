import { createStore } from './utils';

const events = {
  SET: 'color/set',
};

const defaultState = {
  currentColor: '#eeeeee',
};

const reducer = (prevState, event) => {
  switch (event.type) {
    case events.SET: {
      return {
        ...prevState,
        currentColor: event.payload,
      };
    }

    default:
      return prevState;
  }
};

export default createStore(reducer, defaultState);
export { events };
