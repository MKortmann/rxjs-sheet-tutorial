// // Import RxJS
// import { of, map } from 'rxjs';

// rxjs.of(1, 2, 3)
//   .pipe(map((x) => x * x))
//   .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 4
// value: 9

// Note that map logically must be constructed on the fly, since it must be given the mapping function to.


/**
 * Another example using pipe
 */

// import { of, first } from 'rxjs';

// first operator just

// rxjs.of(1, 2, 3)
//   .pipe(rxjs.first())
//   .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1

// Note that first could be a constant, but is nonetheless constructed on the fly.