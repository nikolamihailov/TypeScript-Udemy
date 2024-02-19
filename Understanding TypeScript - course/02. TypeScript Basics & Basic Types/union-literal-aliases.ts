// union types (|) - either number or string
// number | string

// literal types - the exact match or one of the exact matches
// "as-num" | "as-text"

// type aliases/custom types - makes a type that can be or contain anything
// type CustomCombination = number | string

// custom types could be objects as well
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };
console.log(u1);

type CustomCombination = number | string;
type Into = "as-num" | "as-text";

function combine(
  input1: CustomCombination,
  input2: CustomCombination,
  asWhat: Into
) {
  let res;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    asWhat === "as-num"
  ) {
    res = +input1 + +input2;
  } else res = input1.toString() + input2.toString();

  return res;
}

const combinedAges = combine(30, 26, "as-num");
console.log(combinedAges);

const combinedNames = combine("Kolo", "Kolo", "as-text");
console.log(combinedNames);

const combineAll = combine("30", "23", "as-num");
console.log(combineAll);
