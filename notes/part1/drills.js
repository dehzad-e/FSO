// A function that takes an array of numbers and returns their sum.

let nums = [1, 2, 3, 4];

function sumOfArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumOfArray(nums));

// A function that takes an object like { name: "Ana", age: 30 }
// and returns a greeting string using both fields.

const person = {
  name: "Ehsan",
  age: 25,
};

function greet(person) {
  return `Hello, ${person.name}. You are ${person.age} years old.`;
}

console.log(greet(person));

// A function that takes an array of strings and returns a new array where each string
// is uppercased (this is where .map() comes in, from what we just discussed).
const strings = ["apple", "water", "car"];

const toUpper = (array) => array.map((string) => string.toUpperCase());
console.log(toUpper(strings));

// makeIdGenerator()
function makeIdGenerator(startAt) {
  let id = startAt - 1;
  return function () {
    id += 1;
    return id;
  };
}

const gen1 = makeIdGenerator(1);
console.log(gen1());
console.log(gen1());

const gen2 = makeIdGenerator(50);
console.log(gen2());
console.log(gen2());
