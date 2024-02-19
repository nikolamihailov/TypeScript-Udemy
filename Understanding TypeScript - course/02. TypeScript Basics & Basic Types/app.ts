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

const person2 = {
  name: "Kolo2",
  age: 24,
  // hobbies will infer type of string[]
  hobbies: ["training", "playing basketball", "gaming"],
};

// explicitly setting the type
let luckyNums: number[];
luckyNums = [6, 9, 10];

for (const hobby of person2.hobbies) {
  // with type string for the array of hobbies
  // hobby is identified as being a string and we get autocompletion as well
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) we will get an error
}
