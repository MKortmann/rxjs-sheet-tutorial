/**
 * When you load RxJS using a script tag in the browser, the Observable constructor is not directly available on the rxjs global object.
 */


/**
 * An observable is an object that represents a stream of data or events over time. It can be subscribed to, and when it produces values, those values are delivered to the observers
 */
// CREATING AN OBSERVABLE
// const observable = new rxjs.Observable((subscriber) => {
//   subscriber.next(1); //it happens synchronously
//   subscriber.next(2); //return second value over time, function cannot do this
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);  //it happens asynchronously
//     subscriber.complete();
//   }, 1000);
// });
// /**
//  * Subscribe Method: The subscribe method is called on an observable to initiate the subscription.
//  */

// console.log('just before subscribe');

// const observer = observable.subscribe({
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


// debugger
// console.log('just after subscribe');

//Observable.subscribe means "give me any amount of values, either synchronously or asynchronously"

/**
 * Observables as generalizations of functions
 */

// const log = new rxjs.Observable((subscriber) => {
//   console.log("Hello");
//   subscriber.next('Joe')
// })

// log.subscribe((x) => {
//   console.log(x)
// })

/**
 * The following example creates an Observable to emit the string hi every second to a subscriber.
 */

// const observable = new rxjs.Observable(function subscribe(subscriber) {
//   const id = setInterval(() => {
//     subscriber.next('hi');
//   }, 1000);
// });

// Observables can be created with new Observable. Most commonly observables are created using creation functions, like of, from, interval, etc... In the example above, the subscribe function is the most important piece to describe the Observable.

// Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.

//This is drastically different to event handler APIs like addEventListener / removeEventListener. With observable.subscribe, the given Observer is not registered as a listener in the Observable. The Observable does not even maintain a list of attached Observers.

//A subscribe call is simply a way to start an "Observable execution" and deliver values or events to an Observer of that execution.

// There are three types of values an Observable Execution can deliver:

// "Next" notification: sends a value such as a Number, a String, an Object, etc.
// "Error" notification: sends a JavaScript Error or exception.
// "Complete" notification: does not send a value.
// "Next" notifications are the most important and most common type: they represent actual data being delivered to a subscriber. "Error" and "Complete" notifications may happen only once during the Observable Execution, and there can only be either one of them.

// In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.

/**
 * Observable execution that delivers three Next notifications, then completes:
 */

// const observable = new rxjs.Observable(function subscribe(subscriber) {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete();
// });

/**
 * It is a good idea to wrap any code in subscribe with try/catch block that will deliver an Error notification if it catches an exception:
 */

// const observable = new rxjs.Observable(function subscribe(subscriber) {
//   try {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//   } catch (err) {
//     subscriber.error(err); // delivers an error if it caught one
//   }
// })

/**
 * Disposing Observable Executions
 */

// When observable.subscribe is called, the Observer gets attached to the newly created Observable execution. this call also returns an object, the subscription. Using this object, we can unsubscribe.

// The Subscription represents the ongoing execution, and has a minimal API which allows you to cancel that execution. Read more about the Subscription type here. With subscription.unsubscribe() you can cancel the ongoing execution:


// const observable = rxjs.from([10, 20, 30]);
// const subscription = observable.subscribe((x) => console.log(x));
// // Later:
// subscription.unsubscribe();

// So, the example above shows that when you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.

// const observable = new rxjs.Observable(function subscribe(subscriber) {
//   // Keep track of the interval resource
//   const intervalId = setInterval(() => {
//     subscriber.next('hi');
//   }, 1000);

//   // Provide a way of canceling and disposing the interval resource
//   return function unsubscribe() {
//     clearInterval(intervalId);
//   };
// });

// const subscription = observable.subscribe((value) => {
//   console.log(value); // This will log "hi" every second
// });

// // Run for 5 seconds
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// The return function unsubscribe() is invoked when someone calls unsubscribe() on the subscription object returned by observable.subscribe(). This function is responsible for stopping the interval (clearing the interval using clearInterval(intervalId)) and performing any other cleanup tasks if needed.
