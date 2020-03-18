const actionNormal = payload => ({ type: "myAction", payload });

const actionDelay = payload => {
  return dispatch => {
    dispatch(`Inicion ${payload}`);
    setTimeout(() => dispatch(`Termino ${payload}`), 1000);
  };
};

const myDispatch = text => {
  console.log(text);
};

const payload = `fetching`;

const action = actionDelay(payload);

if (typeof action === "function") {
  console.log("action delay");
  action(myDispatch);
} else {
  console.log("action normal");
  console.log(action);
}


