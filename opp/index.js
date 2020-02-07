const util = require("util");

const { EOL } = require("os");

// callbakc
function invoke(a, b) {
  return a() + b();
}

function a() {
  return "1";
}

function b() {
  return "Hola";
}

// auto invoke functions
(arr => {
  // console.log(`arr ${EOL}`, arr);
})([1, 2, 3, 4, 5]);

// functions inner funcions
function node(params) {
  function chield(inners) {
    return inners * 2;
  }
  return chield(params);
}

// console.log(`node ${EOL}`, node(2));

// redifine functions
function x() {
  // console.log("Hi");
  return function() {
    // console.log("Good Bay");
  };
}

x()();
a = x();
a();

// binding functioons
function product(a, b) {
  return a * b;
}

// var obj = product.call(obj, 2, 2);
var obj = product.apply({}, [2, 3]);
// console.log(`obj ${EOL}`, obj);

// why a object js
// form to create objs

// obj literal
var student = { name: "jean", age: 26 };

// obj from constructor
function Teacher(name, suername, age) {
  this.name = name;
  this.suername = suername;
  this.age = age;
}
var teacherMaths = new Teacher("Carlos", "Nieves", 26);

// es5 from nre
var director = new Object();
director.name = "Jean";
director.age = 26;

// properties
var book = {
  title: "Aws",
  pages: 100,
  editorial: "wiks",
  author: { nameAuthor: "jean", suername: "villarreal" }
};

// console.log(`boo ${EOL}`, book);

// add and delete properties objs
var things = {};
things.title = "sless";
things.read = function() {
  return "read read " + this.title;
};

console.log(`thi ${EOL}`, things.read());

// using class es6
class ObjectClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Say Hello " + this.name);
  }
}

var fromClass = new ObjectClass("jevill");
// fromClass.greet();

// usigin prototype

function Productss(num1, num2, num3) {
  return num1 * num2 * num3;
}

Productss.prototype.literal = "Nonse";
Productss.prototype.writter = function() {
  // console.log("Say hello proto " + this.literal);
};

var temps = new Productss(1, 2, 3);
temps.writter();

class Animal {
  constructor() {
    this.name = "Animal";
  }

  toString() {
    return this.name;
  }
}

class Mammal extends Animal {
  constructor() {
    super();
    this.name = "Mammal";
  }
}

class Cat extends Mammal {
  constructor(color, gender) {
    super();

    this.color = color;
    this.gender = gender;
  }

  greet() {
    return `Hi ${this.name} your age is ${this.gender} your color ${this.color}`;
  }
}

// instance
benito = new Cat("red", "male");

function enums(object) {
  for (const prop in object) {
    console.log(`props ${EOL}`, object[prop]);
  }
}

enums(benito);
