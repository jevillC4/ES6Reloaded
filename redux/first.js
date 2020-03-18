const { EOL } = require("os");

const state = {
  country: "peru",
  city: "mexico"
};

const action = {
  payload: "Lima"
};

const newState = { ...state, city: action.payload };

console.log(`newS ${EOL}`, newState);
