let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];
const isDog = (animal) => {
  return animal.species === "dog";
};

let dogs = animals.filter(isDog);

// let dogs = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === "dog") {
//     dogs.push(animals[i]);
//   }
// }

console.log(dogs);
