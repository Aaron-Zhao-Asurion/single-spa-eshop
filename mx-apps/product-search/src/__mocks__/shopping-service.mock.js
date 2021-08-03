import { BehaviorSubject } from "rxjs";

export const cart$ = new BehaviorSubject({
  numberOfItems: 0
});

const delta = {
  value: 5
};

const updateDelta = (_delta) => {
  delta.value = _delta;
};
export { delta, updateDelta }