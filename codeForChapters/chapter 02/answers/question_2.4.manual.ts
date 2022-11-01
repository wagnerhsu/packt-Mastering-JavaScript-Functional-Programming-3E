import { onceIfSuccess } from "./question_2.4";

let count = 0;

const crashTwice = () => {
  count++;
  if (count <= 2) {
    // console.log("CRASH!");
    throw new Error("Crashing...");
  } else {
    // console.log("OK NOW");
  }
};

const doIt = onceIfSuccess(crashTwice);

expect(doIt).toThrow(); // Crash!
expect(doIt).toThrow(); // Crash!
doIt(); // OK NOW
doIt(); // nothing
doIt(); // nothing
doIt(); // nothing
