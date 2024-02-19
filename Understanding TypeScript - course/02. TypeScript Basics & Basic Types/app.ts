// OBJECTS

// better let ts infer the type instead of explicitly assigning type
/* const person: {
    name: string;
    age: number;
}*/

// const person: object

// best to let ts infer the type in this situation

const person = {
  name: "KOlo",
  age: 23,
};

console.log(person);
/* 
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

ts will infer this type from the object above
    {
      id: string;
      price: number;
      tags: string[];
      details: {
        title: string;
        description: string;
      }
    } */

// ARRAYS

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  // tuple example - fixed length array, array containing only two elements, numbera and a string
  userType: [number, string];
} = {
  name: "Kolo2",
  age: 24,
  // hobbies will infer type of string[]
  hobbies: ["training", "playing basketball", "gaming"],
  userType: [1, "user"],
};

// push methods are exception and could work with tuplets
person2.userType.push("asd");

// empty array, type mismatch or more elements will throw
// person2.userType = [];
// person2.userType = [1, 1];
// person2.userType = [1, "asd", 5];

// explicitly setting the type
let luckyNums: number[];
luckyNums = [6, 9, 10];

for (const hobby of person2.hobbies) {
  // with type string for the array of hobbies
  // hobby is identified as being a string and we get autocompletion as well
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) we will get an error
}
