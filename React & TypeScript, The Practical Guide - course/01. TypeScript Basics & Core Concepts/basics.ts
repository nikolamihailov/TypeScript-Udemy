// primitive types
let username: string; // string

username = "Kol";
//  username = 34;

let userAge = 45; // number
let isValid = true; // boolean

/////////////////////////////////////////////
// union types
let userId: number | string = "2";
userId = 2;

/////////////////////////////////////////////
// object types
// let user : object; - not recommended
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

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
let hobbies: string[]; // number[], boolean[]
// { name: string; }[]

hobbies = ["Training", "Walking", "Gaming"];
// hobbies = [1,2,3];

/////////////////////////////////////////////
// types with functions
function add(a: number, b: number) {
  return a + b;
}
console.log(add(3, 5));

function multiply(a: number, b: number) {
  return a * b;
}

function calculate(a: number, b: number, calcFunc: (x: number, y: number) => number): void {
  const res = calcFunc(a, b);
  console.log(res);
}

calculate(5, 15, add);
calculate(5, 15, multiply);

/////////////////////////////////////////////
// type aliases/custom types

type CalcFunc = (x: number, y: number) => number;

type StrOrNum = number | string;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

function calculateTwo(a: number, b: number, calcFunc: CalcFunc): void {
  const res = calcFunc(a, b);
  console.log(res);
}

/*type Admin = {
  permisions: string[];
};

type AppUser = {
  userName: string;
};

// merged type
type AppAdmin = Admin & AppUser;*/

/////////////////////////////////////////////
// interfaces

interface Credentials {
  password: string;
  email: string;
}
// declaration merging
/* interface Credentials {
  mode: string;
} */

let creds: Credentials;

creds = {
  password: "dsfdf",
  email: "df@adb.nh",
};

// implementing interface
/* 
class AuthCred implements Credentials{

}
 */

// interface merging
interface Admin {
  permisions: string[];
}

interface AppUser {
  userName: string;
}

// merged interface
interface AppAdmin extends Admin, AppUser {}

/////////////////////////////////////////////
// literal types
type Role = "admin" | "user" | "editor";
let role: Role; // admin, user, editor

role = "admin";
role = "user";
role = "editor";
// role = "abc";

/////////////////////////////////////////////
// type guards
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

/////////////////////////////////////////////
// generic types

// build in generic type
let roles: Array<Role>;
roles = ["admin"];

// custom
// T is the placeholder type
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["a", "b", "c"],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(data) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

/* const newUser = merge<{ name: string }, { age: number }>({ name: "KOl" }, { age: 4 }); */

const newUser = merge({ name: "KOl" }, { age: 4 });
