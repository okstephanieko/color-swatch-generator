import { noChange } from 'lit-html';
import { AsyncDirective, directive } from 'lit-html/async-directive';

class Observer extends AsyncDirective {
  constructor(partInfo) {
    super(partInfo);
    this.observable = undefined;
    this.unsubscribe = undefined;
    this.previousValue = undefined;
  }

  subscribe(observable) {
    this.unsubscribe = observable.subscribe((value) => {
      this.setValue(value);
      this.previousValue = value;
    });
  }

  render(observable) {
    if (this.observable !== observable) {
      this.observable = observable;
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      this.subscribe(observable);
    }

    return noChange;
  }
}

export default directive(Observer);
