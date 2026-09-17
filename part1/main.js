// Variables
const x = 1;
let y = 5;

console.log(x, y); // 1 5 are printed
y += 10;
console.log(x, y); // 1 15 are printed
y = "sometext";
console.log(x, y); // 1 sometext are printed
// x = 4               // causes an error

// Arreys
const nums = [1, 2, 3, 4];

nums.forEach((value) => {
  console.log("Ehsan");
});

const nums2 = nums.concat(5);
console.log(nums2);

const nums3 = nums2.map((value) => value * 2);
console.log(nums3);

const li = nums.map((value) => "<li>" + value + "</li>");
console.log(li);

const n = [5, 6, 7, 8, 9];

const [first, second, ...rest] = n;
console.log(first, second, rest);

// Objects
const object1 = {
  name: "Ehsan",
  age: 25,
  education: "Bachelor",
};

const object2 = {
  name: {
    first: "Ehsan",
    last: "Dehzad",
  },
  grades: [2, 3, 4],
  deparment: "CS",
};

console.log(object1.name);
console.log(object1["name"]);
const fieldName = "name";
console.log(object2[fieldName]);

object1.address = "Lexington";
object1["email address"] = "edehzad@gmail.com";
console.log(object1);

// Functions
function greet(name) {
  console.log("hi " + name);
}

const result1 = greet("Sam");
console.log(result1);

const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 2);
console.log(result);

const square = (p) => {
  // if there is only one parameter, no need to use ()
  console.log(p);
  return p * p;
};

const square2 = (p) => p * p;

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
console.log(tSquared);

// two ways to referece the function
function product(a, b) {
  return a * b;
}

const result3 = product(2, 3);

const average = function (a, b) {
  return (a + b) / 2;
};

const result4 = average(2, 4);

// Object methods and this keyword
const ehsan = {
  name: "Ehsanullah Dehzad",
  age: 25,
  education: "Bachelor",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

ehsan.getOlder = function () {
  this.age += 1;
};

ehsan.greet();
ehsan.getOlder();
console.log(ehsan.age);

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },

  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.doAddition(1, 4); // 5 is printed

const refrenceToAddition = arto.doAddition;
refrenceToAddition(4, 5);

const refrenceToGreet = ehsan.greet.bind(ehsan);
refrenceToGreet();

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const ehsan1 = new Person("Ehsan", 25);
ehsan1.greet();
