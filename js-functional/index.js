const R = require("ramda");
const { EOL } = require("os");

let t = function() {
  let name = "Jevill";
  return () => name;
};

// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }
// refactoring
let add = x => y => Math.pow(x, 2) + y;

let a1 = add(2),
  a2 = add(4);

// adding patterm factory
let get = prop => obj => obj[prop];

let getProp = get("name");
let getPropArr = get(2);

let To = {
    name: "Jean villarreal"
  },
  arr = [1, 2, 3, 5];

// using prototipe to way functional
let map = fn => arr => Array.prototype.map.call(arr, fn);

let people = [
  { name: "jevill", email: "jevill18" },
  { name: "carlos", email: "javn93c" }
];

console.log(`map ${EOL}`, map(get("name"))(people));

let take = n => arr => arr.slice(0, n);
console.log(`take ${EOL}`, take(2)([9, 8, 7, 6, 5]));

function flip(fn) {
  return function(f, s) {
    let rest = [].slice.call(arguments, 2);
    return fn.apply(null, [s, f].concat(rest));
  };
}

let o = () => "inner-1";
let p = (u, y) => `${u} - ${y}`;

let rs = flip(o);
console.log(`res ${EOL}`, rs);

const mergeThree = (a, b, c) => [].concat(a, b, c);

console.log(`R ${EOL}`, R.flip(mergeThree)(1, 2, 3));

let count = 0;
const factorial = R.memoizeWith(R.identity, n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});
console.log(`factorial(5); ${EOL}`, factorial(5)); //=> 120
console.log(`factorial(5); ${EOL}`, factorial(5)); //=> 120
console.log(`factorial(5); ${EOL}`, factorial(5)); //=> 120
console.log(`count; ${EOL}`, count); //=> 1
