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
function makeIdGenerator() {
  let id = 0;
  return function () {
    id += 1;
    return id;
  };
}

const idGenerator = makeIdGenerator();
console.log(idGenerator());
console.log(idGenerator());
