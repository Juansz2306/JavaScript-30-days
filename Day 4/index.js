import { inventors, people, data } from './data.js';

// 1.Filter the list of inventors for those who were born in the 1500 Array Prototype filter();

const fifteen = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(fifteen);

// 2. Give us am array of the inventors first and last name. Array Prototype map()

const fullName = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});

console.log(fullName);

// 3. Sort the inventors by birthdate. oldest to younges Array Prototype sort()

const order = inventors.sort((inventor, inventorSecond) => {
  if (inventor.year > inventorSecond.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(order);

// 4. How many year did all the inventor live Array reduce()

const totalYearsInventors = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log('total: ' + totalYearsInventors);

// 5. Sort the inventors by years live

const inventorYearLive = inventors.sort(
  (inventorYearlast, inventorYearNext) => {
    const lastInventor = inventorYearlast.passed - inventorYearlast.year;
    const nextTnventor = inventorYearNext.passed - inventorYearNext.year;
    if (lastInventor > nextTnventor) {
      return -1;
    } else {
      return 1;
    }
  }
);
console.table(inventorYearLive);

// 6. Create inventorYearlast list of Boulevards in paris that contain 'de' anywere in the name

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('inventorYearlast'));
// const de = links
//   .map((link) => link.textContent)
//   .filter((street) => street.includes('de'));

// 7. sort Exercise sort the people alphabetically by last name

const alphabeticallyLastName = people.sort((lastanmebefore, lastnamenext) => {
  const [lastanmeBefor] = lastanmebefore.split(', ');
  const [lastNamenext] = lastnamenext.split(', ');
  return lastanmeBefor > lastNamenext ? -1 : 1;
});

console.log(alphabeticallyLastName);

// 8. Reduce Extreme: Sum up the instances of each of these

const transport = data.reduce((transports, transport) => {
  if (!transports[transport]) {
    transports[transport] = 0;
  }
  transports[transport]++;
  return transports;
}, {});

console.log(transport);
