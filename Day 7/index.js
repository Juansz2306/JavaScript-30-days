import { people, comments } from './data.js';

// some and every Checks array.prototpe.some() //is at last one person 19?
const adult = people.some(people => {
  const thisYear = new Date().getFullYear();
  if (thisYear - people.year >= 19) {
    return true;
  }
  return false;
});
console.log(adult);
// Array.protptype.every() // is every 19
const everyOneAdult = people.every(people => {
  const thisYear = new Date().getFullYear();
  if (thisYear - people.year >= 19) {
    return true;
  }
  return false;
});
console.log(everyOneAdult);

// array.prototype.find()
// find is like fiften, but insteand retur just the one your are loking for
// find the comment whith IDof 823423
const id = comments.find(coment => {
  if (coment.id === 823423) {
    return 1;
  }
});
console.log(id);

// Array.prototype.findIndex()
// Find the comment whith this ID
// detele the comment whith the ID of 823423

const deleteComment = comments.findIndex(comment => comment.id === 823423);
console.log(deleteComment);
// comments.splice(deleteComment, 1);
console.table(comments);
// whith spreads

const newComments = [
  ...comments.slice(0, deleteComment),
  ...comments.slice(deleteComment + 1),
];

console.table(newComments);
