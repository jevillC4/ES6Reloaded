const util = require("util");

const { EOL } = require("os");

const state = { h: 123, g: 54564 };

const mapper = {
  a: {
    ...state,
    msg: "hi i'm a"
  }
};

const objSwitch = (map, value) => map[value] || "default";

console.log(`map ${EOL}`, objSwitch(mapper, "a"));
