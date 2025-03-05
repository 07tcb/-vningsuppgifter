const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
  { name: "Emma", age: 28 },
  { name: "Frank", age: 42 },
  { name: "Grace", age: 19 }
];

for (let i=0; i < people.length; i++){
  console.log(`My name is ${people[i].name} and I am ${people[i].age} years old`);
}