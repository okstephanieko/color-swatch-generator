import { BehaviorSubject } from 'rxjs';

const observerTemplate = (defaultValue) => {
  const templateValue = new BehaviorSubject(defaultValue);
  function updateTemplateValue(value) {
    templateValue.next(value);
  }
  return {
    templateValue,
    updateTemplateValue,
    observer: (cb) => ({
      next: cb,
    }),
  };
};

export default observerTemplate;
