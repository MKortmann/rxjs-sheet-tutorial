// import { Observable, observeOn, asyncScheduler } from 'rxjs';

// const observable = new rxjs.Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// }).pipe(
//   rxjs.observeOn(rxjs.asyncScheduler)
// );

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');


// The observeON(asyncScheduler) introduces a proxy Observer between new Observable and the final Observer.
