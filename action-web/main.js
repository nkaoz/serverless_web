let openwhisk = require("openwhisk");

// This returns the activation ID of the action that it called
function main(args) {
  let ow = openwhisk();
  return ow.actions.invoke({
    name: "score/credit", // the name of the action to invoke
    blocking: true, // this is the flag that instructs to execute the worker asynchronous
    result: true,
    params: args,
  });
}

exports.main = main;
