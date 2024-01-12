// Import the necessary RxJS operators and functions
// import { Observable } from 'rxjs';
/**
 * PUSH MODEL
 */


// Create a simple observable that emits values over time
// const pushObservable = new rxjs.Observable(observer => {
//   let count = 0;
//   const intervalId = setInterval(() => {
//     observer.next(count++);
//   }, 1000);

//   // Cleanup function to stop emitting values when unsubscribed
//   return () => {
//     clearInterval(intervalId);
//   };
// });

// // Subscribe to the observable and log the received values
// const pushSubscription = pushObservable.subscribe(value => {
//   console.log(`Received: ${value}`);
// });

// // Unsubscribe after 5 seconds
// setTimeout(() => {
//   pushSubscription.unsubscribe();
//   console.log('Unsubscribed');
// }, 5000);

/**
 * PULL MODEL
 */

// Import the necessary RxJS operators and functions
// import { of } from 'rxjs';
// import { toArray } from 'rxjs/operators';

// Create an observable with values
// const pullObservable = rxjs.of(1, 2, 3, 4, 5);

// Use the toArray operator to accumulate values and pull the array
// pullObservable.pipe(rxjs.toArray()).subscribe(array => {
//   console.log(`Received array: ${JSON.stringify(array)}`);
// });

