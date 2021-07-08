import { BehaviorSubject } from "rxjs";

export const cart$ = new BehaviorSubject({
  numberOfItems: 0
});