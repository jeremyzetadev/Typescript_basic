const user = { name: "Charlie", age: 25};

const admin: { name: string; age: number} = {
    name: "Dave",
    age: 30
};

console.log(user);
console.log(admin);


interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const employee1: Person = {
  name: "Elvie",
  age: 28
};

console.log(employee1);
