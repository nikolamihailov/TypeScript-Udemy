// typescript core types - number, string, boolean
// type assignment so that we cannot pass any other type as argument

// ts way
function add(a: number, b: number, showResult: boolean, strAdded: string) {
  const res = a + b;
  if (showResult) console.log(strAdded + res);
  else return res;
}

//js way
/* function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid input type!");
    }
  return a + b;
} */

// type inference - ts knows the types
// const a:number = 5 is redundant
// only if we use let a:number and later pass a=5 is correct
const a = 5;
const b = 22.45;
const printResult = true;
const resultStr = "The result is: ";

// const res = add(a, b, printResult);
// console.log(res); // 27.45
add(a, b, printResult, resultStr);
