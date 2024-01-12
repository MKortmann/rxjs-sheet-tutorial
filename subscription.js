// import { interval } from 'rxjs';

// Creates an observable that emits values every 1000 milliseconds
// const observable = rxjs.interval(1000);
// // Subscribe to the observable and log the emitted values to the console
// const subscription = observable.subscribe(x => console.log(x));
// console.log(typeof subscription)
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
// Later: Unsubscribe to stop the ongoing Observable execution
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000); // Unsubscribe after 5 seconds


// Another way to subscribe without the setTimeout
// const subscription = observable.subscribe(x => {
//   console.log(x);
//   if (x === 3) {
//     subscription.unsubscribe(); // Unsubscribe after the value 3 is emitted
//   }
// });
