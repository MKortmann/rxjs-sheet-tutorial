// // // Import RxJS
// // // const rxjs = require('rxjs');
// // // const { concatAll } = require('rxjs/operators');

// // // Create an observable for URLs
// const urlObservable = rxjs.of(
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/todos/2',
//   'https://jsonplaceholder.typicode.com/todos/3'
// );

// // // Original code: map to an observable using fetch(url)
// const fileObservable = urlObservable.pipe(map((url) => fetch(url).then(response => response.json())));

// // // Enhanced code: map to an observable and then flatten using concatAll
// const enhancedFileObservable = urlObservable.pipe(
//   rxjs.map((url) => fetch(url).then(response => response.json())),
//   rxjs.concatAll()
// );

// // // Subscribe to the original fileObservable - It will give three promise back
// fileObservable.subscribe((fileContent) => console.log('Original:', fileContent));

// // // Subscribe to the enhancedFileObservable - It will log the exactly content fetched
// enhancedFileObservable.subscribe((fileContent) => console.log('Enhanced:', fileContent));
