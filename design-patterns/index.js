const util = require("util");

const { EOL } = require("os");

class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.method = () => {};
  }
}

const instance = new MyClass(1, 2);

// extends class object
Object.prototype.log = function() {
  console.log(`this ${EOL}`, this);
};

const x = { a: 1 };

// x.log();

if (!String.prototype.trim) {
  String.prototype.trim = function() {
    try {
      return this.replace(/-/g, "");
    } catch (error) {
      return this;
    }
  };
}

const y = "   lalala   ".trim();

// y.log()

// IIFE
const Users = (() => {
  const recurso = "https://jsonplaceholder.typicode.com/todos/1";

  return {
    list: async () => {
      let result = await fetch(recurso);
      let data = await result.json();
      return data;
    },
    create: async () => {
      const result = await fetch(recurso, {
        type: "POST",
        body: JSON.stringify(data)
      });
      const toJson = await result.json();
      return toJson;
    }
  };
})();

// const auditProps = {
//   createAt: { default: new Date() },
//   updateAt: { default: new Date() },
//   createBy: { type: Schema.Types.ObjectId, ref: "Users" },
//   updateBy: { type: Schema.Types.ObjectId, ref: "Users" }
// };

// const Model = defaultProps => {
//   return (name, props) => {
//     const schema = mongoose.schema({
//       ...defaultProps,
//       ...props
//     });

//     return mongoose.model(name, schema);
//   };
// };

// export const witdAudit = Model(auditProps);

// point freepo
const f = (param, cb) => {
  console.log(`param ${EOL}`, param);
  const result = param + 2;
  cb(result);
};

const handlerResult = result => {
  console.log(`handlerResult ${EOL}`, result);
};

f(2, handlerResult);

class Person {
  constructor() {
    this.name = "lala";
  }

  greet() {
    console.log(`this.name ${EOL}`, this.name);
  }
}

class Dog extends Person {}

// from compose

const greet = name => console.log(`greet this is my name ${EOL}`, name);
const sayGoodBay = name => console.log(`greet this is my name ${EOL}`, name);

const pers = {
  name: "lolo",
  greet: () => greet(this.name)
};

// with class
class Another {
  constructor() {}
  greet() {
    greet(this.name);
  }

  goodBay() {
    sayGoodBay(this.name);
  }
}

// curry
const curry = x => y => z => `${x} + ${y} + ${z}`;

const iife = ((a, b, c) => {
  // console.log(`curry inner iife ${EOL}`, curry(a)(b)(c));
})(1, 2, 3);

const curry2 = (x, a) => (show = () => x + a)();

console.log(`curry2 ${EOL}`, curry2("hola", "jean"));
