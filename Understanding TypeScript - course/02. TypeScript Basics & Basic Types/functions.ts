// ts will infer that the return type of the function will be number
function add(a: number, b: number) {
  return a + b;
}

// as other programming languages if the function doesnt return anything it has a return type of void
// ts will infer it as :void
function printResult(num: number) {
  console.log(`Result: ${num}`);
}

// function type can be Function
let combineValues: Function;
// combineValues = printResult; would work because printResult is a function
combineValues = add;
console.log(combineValues(13, 7));

// however function types can be more specific
// combineValuesSpecific should be a function with tho nums and return type of number
let combineValuesSpecific: (x: number, y: number) => number;
// combineValuesSpecific = printResult; would not work
combineValuesSpecific = add;

console.log(combineValuesSpecific(30, 70));

printResult(add(5, 10));

// with callbacks

function addAndHandle(a: number, b: number, callB: (x: number) => void) {
  const res = a + b;
  callB(res);
}

addAndHandle(5, 10, (result) => {
  console.log(result);
});
