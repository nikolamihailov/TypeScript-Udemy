// primitive types
let username; // string
username = "Kol";
//  username = 34;
let userAge = 45; // number
let isValid = true; // boolean
/////////////////////////////////////////////
// union types
let userId = "2";
userId = 2;
/////////////////////////////////////////////
// object types
// let user : object; - not recommended
let user;
user = {
    name: "Kol",
    age: 23,
    isAdmin: true,
    id: 0,
};
// user = {} - not valid
/////////////////////////////////////////////
// array types
// let hobbies: Array<string>;
let hobbies; // number[], boolean[]
// { name: string; }[]
hobbies = ["Training", "Walking", "Gaming"];
// hobbies = [1,2,3];
/////////////////////////////////////////////
// types with functions
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
function multiply(a, b) {
    return a * b;
}
function calculate(a, b, calcFunc) {
    const res = calcFunc(a, b);
    console.log(res);
}
calculate(5, 15, add);
calculate(5, 15, multiply);
//# sourceMappingURL=basics.js.map