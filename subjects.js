// // import { Subject } from 'rxjs';

// const subject = new rxjs.Subject();

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(1);
// subject.next(2);

// // Logs:
// // observerA: 1
// // observerB: 1
// // observerA: 2
// // observerB: 2


// const observable = rxjs.from([1, 2, 3]);

// observable.subscribe(subject); // You can subscribe providing a Subject

// // Logs:
// // observerA: 1
// // observerB: 1
// // observerA: 2
// // observerB: 2
// // observerA: 3
// // observerB: 3

// // With the approach above, we essentially just converted a unicast Observable execution to multicast, through the Subject.This demonstrates how Subjects are the only way of making any Observable execution be shared to multiple Observers.


// /**
//  * Multicated Observables
//  * A multicasted Observable uses a Subject under the hood to make multiple Observers see the same Observable execution
//  */

// // const subject = new rxjs.Subject();

// // // These are, under the hood, `subject.subscribe({...})`:
// // multicasted.subscribe({
// //   next: (v) => console.log(`observerA: ${v}`),
// // });
// // multicasted.subscribe({
// //   next: (v) => console.log(`observerB: ${v}`),
// // });

// // const observable = rxjs.from([1, 2, 3]);
// // const multicasted = observable.pipe(rxjs.multicast(subject));
// // // This is, under the hood, `observable.subscribe(subject)`. It returns a Subscription, which you can unsubscribe from in order to cancel the shared Observable execution
// // multicasted.connect();