import { noChange } from 'lit-html';
import { AsyncDirective, directive } from 'lit-html/async-directive';

class Observer extends AsyncDirective {
  constructor(partInfo) {
    super(partInfo);
    this.observable = undefined;
    this.unsubscribe = undefined;
  }

  subscribe(observable) {
    this.unsubscribe = observable.subscribe((value) => {
      this.setValue(value);
    });
  }

  cacheObservable(observable) {
    this.observable = observable;
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render(observable) {
    if (this.observable !== observable) {
      this.cacheObservable(observable);
      this.subscribe(observable);
    }

    return noChange;
  }

  disconnected() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  reconnected() {
    this.subscribe(this.observable);
  }
}

export default directive(Observer);
