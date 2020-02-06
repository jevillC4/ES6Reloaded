// auto execute functions
(() => {
  console.log("Ok");
})();

// Is the equivalent of IIFE
(function() {
  console.log("Ok");
})();

function showLength(array) {
  if (array.length > 5) {
    let greater = "Greater than 5";
    console.log(greater);
  } else {
    let lessThan = "less than 5";
    console.log(lessThan);
  }
}

showLength([1, 2, 3, 4, 5, 6]);

var funcs = [];

for (let i = 0; i < 5; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[0]();
funcs[1]();
funcs[2]();

// Scope
{
  var foo = "Hello";
  console.log(foo);
  {
    // diferent scope
    let foo = "world";
    console.log(foo);
  }
}

// default params
// form one , not controller undefined values
function box(height, color, url) {
  //when declare params for defautl & asign values use the variable "var" not "let" use this form for controller
  var height = height !== undefined ? height : 50,
    color = "blue",
    url = "google.com";

  let data = {
    height: height,
    color: color,
    url: url
  };

  console.log(JSON.stringify(data, null, "\t"));
}

box(3, "green", "youtube.com");

// form two // controller undefined values
function boxes(height = 50, color = "blue", url = "google.com") {
  let data = {
    height: height,
    color: color,
    url: url
  };

  console.log(JSON.stringify(data, null, "\t"));
}

boxes(4, undefined, "spotify.com");

// expression as default paramas
function declareValue(value = 4) {
  return value * 2;
}

function expressionOne(
  height = declareValue(100),
  color = "blue",
  url = "google.com"
) {
  let data = {
    height: height,
    color: color,
    url: url
  };

  console.log(JSON.stringify(data, null, "\t"));
}

expressionOne(undefined, undefined, "spotify.com");

function multiply(num = 2, numTwo = num) {
  return num * numTwo;
}

console.log(multiply(undefined, 3));

// rest operador
function sum(args1, args2, ...numbers) {
  // using prototype
  // var numbers = Array.prototype.slice.call(arguments),
  var result = 0;

  return numbers.map(number => {
    result += number;
  });
}

console.log(sum("one", "two", 3, 5, 7, 9));

var obj1 = { a: 1, b: 2, c: 3 },
  obj2 = { x: 9, y: 8, z: 7 },
  obj3 = { o: 4, p: 5, q: 6 };

function readObjs(...objs) {
  let { a, b, c } = obj1;
  console.log(" for test: %s", a);
  console.log(JSON.stringify(objs));
}

readObjs(obj1);

// spread operator
let numbersZ = [1, 2, 3];
(function sums(a = 5, b = 6, c = 7) {
  console.log("result:", a + b + c);
})(...numbersZ);

// binding if the this with arroy function
var person = {
  firsname: "jean",
  lastname: "villarreal",
  getFullNameOne: function() {
    var self = this;
    var name = function() {
      console.log("use context self:", self.firsname, self.lastname);
    };
    return name();
  },
  getFullNameTwo: function() {
    var name = function() {
      console.log("use context bind:", this.firsname, this.lastname);
    }.bind(this);
    return name();
  },
  getFullNameThree: function() {
    var name = () =>
      console.log("use context arroy function:", this.firsname, this.lastname);
    return name();
  }
};
person.getFullNameOne();
person.getFullNameTwo();
person.getFullNameThree();

// object initailiazion short hand
function createUser(firsname, lastname) {
  let fullName = firsname + " " + lastname;
  return {
    firsname,
    lastname,
    fullName
  };
}

let user = createUser("jean", "villarreal");
console.log(
  "%s, %s, Fullname: %s",
  user.firsname,
  user.lastname,
  user.fullName
);

// object desturcturing
let obs = {
  a: 1,
  b: 2,
  c: 3
};
let { a, b, f } = obs;
console.log(a, b, f);

// adding function to an object
let myObj = {
  prop1: "hi",
  prop2: "world",
  fullName(firsname, lastname) {
    let fullName = firsname + " " + lastname;
    return fullName;
  }
};

console.log(myObj.fullName("carlos", "villarreal"));

// use object asign
let item = {
  id: 1,
  content: "ES6 Reloaded",
  complete: false
};

let newItem = Object.assign({}, item, { id: 2 }, { complete: true });
let otherNewItem = { ...item, content: "ES7 New" };

console.log("item", item);
console.log("newItem", newItem);
console.log("otherNewItem", otherNewItem);

//  array destructuring
let fruits = ["banana", "apples", "grapes"];

let [aa, bb, cc] = fruits;
let [aaa, , ccc] = fruits;

console.log(aa, bb, cc);
console.log(aaa, ccc);

// for of loops
let bans = ["banana", "apples", "grapes"];
for (const i in bans) {
  console.log(bans[i]);
}
for (const iterator of bans) {
  console.log("iterator", iterator);
}

// array.find
let services = [
  { name: "nails", activated: false },
  { name: "haircut", activated: true },
  { name: "feet therapy", activated: true }
];

let activated = services.find(service => service.activated);
console.log("ativated", activated);

// maps I
let carOne = {
  make: "Audi"
};

let carTwo = {
  make: "Forf"
};

let carAge = new Map();
carAge.set(carOne, 3);
carAge.set(carTwo, 5);
console.log("carAge", carAge);

// iterating maps with for of
let cars = new Map();
cars.set("carOne", "Audi");
cars.set("carTwo", "Ford");
cars.set("carThree", "GM");
cars.set("carFour", "BMW");

for (const [key, value] of cars) {
  console.log(`${key} : ${value}`);
}

// plain objects and the for..of loop
let perr = {
  name: "carlos",
  address: "chorrillos - lima",
  occupation: "programming analist"
};
// don't iterar with for..of objects plains only arrays
// for (const iterator of perr) {
//   console.log("per - iter", iterator);
// }
// console.log(typeof per[Symbol.iterator]);

// weakMap
let personOne = {};
let personTwo = {};
let people = new WeakMap();
people.set(personOne, "David");
people.set(personTwo, "Abdi");
console.log(people.get(personOne));
console.log(people.get(personTwo));

// sets
// based on
let cr = ["audi", "ford", "mercedes", "vm"];
console.log(cr.length);

// use sets
let crs = new Set();
crs.add("audi");
crs.add("mercedes");
crs.add("ford");
crs.add("vm");

console.log("lenght set", crs.size);
for (const car of crs) {
  console.log(car);
}
// use destructuring
let [aaaa, bbbb, cccc] = crs;
console.log(aaaa, bbbb, cccc);

// when should use weksets
let carSlides = [
  { car: "audi", seen: false, image: "url" },
  { car: "ford", seen: false, image: "url" },
  { car: "mercedes", seen: false, image: "url" },
  { car: "vw", seen: false, image: "url" }
];

let carsViewed = new WeakSet();

function clicked(carSlides) {
  carSlides.forEach(car => {
    // mutates each object in the carSlides
    // car.seen = true; ||
    carsViewed.add(car);
  });
}
let linkClicked = true;

if (linkClicked) {
  clicked(carSlides);
}

console.log("carSlides", carSlides);

for (const car of carSlides) {
  console.log(carsViewed.has(car));
}

console.log(carSlides);

// function & inheritance
function Car(carSpec) {
  this.name = carSpec.name;
  (this.model = carSpec.model), (this.description = carSpec.description);
}

Car.prototype.drive = function() {
  console.log("Driving...");
};

function Audi(carSpec) {
  Car.call(this, carSpec);
  this.engine = carSpec.engine;
  this.audiDrive = function() {
    console.log("Audi Driving");
  };
}

Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

const myAudi = new Audi({
  name: "My Audi",
  model: "Audi",
  description: "Great German car",
  engine: "A313"
});

console.log("My Audi:", myAudi.description);

// callbacks
// callbacks problems
function waitingFor(name, done) {
  console.log("waiting for", name);
  setTimeout(function() {
    if (name === "Mike") {
      done("Mike is always late!");
    } else {
      done(null, name);
    }
  }, 1000);
}
/*waitingFor("Abdi", function(error, Abdi) {
  if (error) {
    console.log(error);
  } else {
    waitingFor("Michelle", function(error, michelle) {
      if (error) {
        console.log(error);
      } else {
        waitingFor("Mike", function(error, thomas) {
          if (error) {
            console.log(error);
          } else {
            waitingFor("Jhon", function(error, jhon) {
              if (error) {
                console.log(error);
              } else {
                console.log("Great! We've got everyone, let's go!");
              }
            });
          }
        });
      }
    });
  }
});*/

// promises in action
function waitingTo(name) {
  console.log(`Waiting for ${name}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Mike") {
        reject("Mike is always late!!!");
      } else {
        resolve(name);
      }
    }, 1000);
  });
}

// waitingTo("Abdi").then(name => {
//   console.log(`Great wo got ${name}`);
// });

// othen example
// use waitingTo
function waitForFriend(name) {
  return function() {
    return waitingTo(name);
  };
}

function leave() {
  console.log("Great we have everyone from leave");
}

var gotImpatient = function(error) {
  console.log(error);
  return Promise.resolve("We're leaving");
};

waitingTo("jean")
  .then(waitForFriend("maria"))
  .then(waitForFriend("lucia"))
  .then(waitForFriend("Mike"))
  .catch(gotImpatient)
  .then(leave);

// running miltiple promises at once
function waitForAll() {
  return Promise.all([
    waitingTo("camila"),
    waitingTo("casandra"),
    waitingTo("antonio")
  ]);
}

waitForAll().then(friends => {
  console.log(`Great! ${friends[0]} is coming`);
  console.log(`Great! ${friends[1]} is coming`);
  console.log(`Great! ${friends[2]} is coming`);
});
