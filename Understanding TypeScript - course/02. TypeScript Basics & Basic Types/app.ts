// uknown type is similar to any but more restrictive

let userInput: unknown;
let bla: string;

userInput = 5;
userInput = "Ko";

// bla = userInput; // 'unknown' is not assignable to type 'string'

// if we want to assign another variable to userInput we must first be sure of its type
if (typeof userInput === "string") bla = userInput;
// if userInput was ay this will work because any is the most flexible

// although the inferred return type is void here, the function actuallt returns never
// so we could explicitly write it here
function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("server crashed, oops!", 500);
