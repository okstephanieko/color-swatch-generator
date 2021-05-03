import { map } from 'rxjs/operators';

import observe from './directives/observe';

const makeListener = (observable, Template) => (Template
  ? observe(observable.pipe(
    map((value) => Template(value)),
  ))
  : observe(observable));

export default makeListener;
