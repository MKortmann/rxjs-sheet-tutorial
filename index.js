const { fromEvent, scan, throttleTime, map } = rxjs;

/**
 *
 * EXAMPLE 1
 */

// document.getElementById('myButton').addEventListener('click', () => {
//   console.log('clicked')
// })

// document.addEventListener('click', () => console.log('Clicked!'));

// // using RxJS fromEvent observable
// fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));


/**
 *
 * EXAMPLE 2
 */

// // log the amoung of clickes without RxJS
// let count = 0;
// document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

// // using RxJS scan operator
// // scan in RxJS and reduce for arrays are used to accumulate values over time however, reduce for arrays is a synchronous event and RxJS async
// /**
//  * The scan operator in RxJS is used to accumulate values emitted by an observable over time. It's similar to the Array.reduce method for arrays, but it
//  * works on streams of data rather than static arrays
//  */

// fromEvent(document, 'click')
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log(`Clicked ${count} times`));

  /**
 *
 * EXAMPLE 3
 */

  /**
   * Flow
RxJS has a whole range of operators that helps you control how the events flow through your observables
   */

// This is how you would allow at most one click per second, with plain JavaScript:

// let count = 0;
// let rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', () => {
//   if (Date.now() - lastClick >= rate) {
//     console.log(`Clicked ${++count} times`);
//     lastClick = Date.now();
//   }
// });

// So, the operator throttleTime emits a value from the source observable, then ignores subsequent source values for duraciton in milliseconds.

// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`Clicked ${count} times`));


/**
 *
 * EXAMPLE 4
 * Values - you can transform the values passed through your observables
 *
 */

// Add the current mouse x position for every click
// let count = 0;
// const rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', (event) => {
//   if (Date.now() - lastClick >= rate) {
//     count += event.clientX;
//     console.log(count);
//     lastClick = Date.now();
//   }
// });

// With RxJS

// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     map((event) => event.clientX),
//     scan((count, clientX) => count + clientX, 0)
//   )
//   .subscribe((count) => console.log(count));