const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

// eslint-disable-next-line no-unused-vars
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#0099FF';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello %s ', 'I am Juan');

// Styled
console.log('%c Hello', 'font-size: 30px');

// Warning
console.warn('Danger');

// Error
console.error('Error');

// Info
console.info('hello world');

// Testing
console.assert(1 === 2, 'No');

// Clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Gruping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`The dog name is ${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name}`);
});

// Counting
console.count('Hello');
console.count('Hello');
console.count('Hello');
console.count('Hello');
console.count('Hello');

// Timing
// console.time('fetching data');
// fetch('https://api.github.com/users/wesbos')
//   .then((data) => data.json(0))
//   .then((data) => {
//     console.timeEnd('fetching data');
//     console.log(data);
//   });

// Table
console.table(dogs);
