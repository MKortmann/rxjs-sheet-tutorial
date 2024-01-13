// // // Import RxJS
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// // Define a Pipeable Operator Factory
 const multiplyByFactory = (factor) => {
   // Return a Pipeable Operator
   return rxjs.map((value) => value * factor);
};

// // Create an observable
const source = rxjs.of(1, 2, 3, 4, 5);

// // Use the Pipeable Operator generated by the Factory
const multipliedByTwo = source.pipe(multiplyByFactory(2), multiplyByFactory(2), multiplyByFactory(2), rxjs.take(3));

// // Subscribe to the result (Observer)
const observer = multipliedByTwo.subscribe((result) => console.log(result));
