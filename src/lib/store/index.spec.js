import { assert } from 'chai';

import { bindActionCreators, createStore } from '.';

describe('State management utilities', () => {
  let store;
    let isCompleted;
    let action;

    const initialState = {
      id: 1,
      isCompleted: false,
    };
    
    const quizModule = {
      name: 'quiz',
      initialState,
      reducers: {
        quizCompleted(prevState) {
          return {
            ...prevState,
            isCompleted: true,
          };
        },
      },
    };

    function subscribe(state) {
      state.subscribe((currentState) => {
        isCompleted = currentState.quiz.isCompleted;
      });
    }

    beforeEach(() => {
      store = createStore([quizModule]);
      subscribe(store.getState());
    });

    afterEach(() => {
      store = undefined;
      isCompleted = undefined;
    });

  describe('Store creator', () => {
    it('Newly created store returns default state', () => {
      assert.isFalse(isCompleted);
    })

    describe('Changes state', () => {
      const testAction = { type: 'quizCompleted' };

      it('Store returns new state', () => {
        subscribe(store.getState());
        store.dispatch(testAction);
        assert.isTrue(isCompleted);
      });

      it('Store records correct action', () => {
        store.getActions().subscribe((currentAction) => {
          action = currentAction;
        });
        store.dispatch(testAction);
        assert.strictEqual(action, testAction);
      });
    });
  });

  describe('Action creator binder', () => {
    let store;
    let boundActions;
  
    const actionCreators = {
      completeQuiz() {
        return { type: 'quizCompleted' };
      },
    };
  
    beforeEach(() => {
      store = createStore([quizModule]);
      boundActions = bindActionCreators(actionCreators, store.dispatch);
    });
  
    afterEach(() => {
      store = undefined;
      boundActions = undefined;
    });
  
    it('bind function returns object', () => {
      assert.hasAllKeys(boundActions, ['completeQuiz']);
    });
  
    it('dispatch function called when creator called', () => {
      let isCompleted = false;
      store.getState().subscribe((currentState) => {
        isCompleted = currentState.quiz.isCompleted;
      });
  
      boundActions.completeQuiz();
      assert.isTrue(isCompleted);
    });
  });
});
