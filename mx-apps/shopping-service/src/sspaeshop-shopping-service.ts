import { BehaviorSubject } from "rxjs";

export const cart$ = new BehaviorSubject<any>({
  numberOfItems: 0
});