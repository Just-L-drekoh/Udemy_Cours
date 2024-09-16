import { test } from "./util.js";

console.log(test);

const user = {
  name: "John",
  age: 20,
  email: "john@gmail.com",
  city: "New York",
  country: "USA",
};

console.log();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const user1 = new User("John", 20);
const user2 = new User("Jane", 25);

const userInfo = [user1, user2];

console.log(userInfo);

const hobbies = ["coding", "reading", "traveling"];
console.log(hobbies[0]);

hobbies.push("Working");

const index = hobbies.findIndex((item) => item === "Working");

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

function transformToObjects(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
}

console.log(transformToObjects([1, 4, 9]));

const [firstName, lastName] = ["Logan", "Herbomel"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log(firstName);
console.log(lastName);

const { age: userAge, name: userName } = {
  name: "Logan",
  age: 20,
};

console.log(userName);
console.log(userAge);

const extendedUser = {
  gender: "male",
  ...user,
};

console.log(extendedUser);

const apex = ["wraith", "loba", "fuze"];
console.log(apex);
const newApex = ["lifeline"];
console.log(newApex);
const mergedApex = [...apex, ...newApex];
console.log(mergedApex);

// const password = prompt("Enter your password");

// if (password === "Hello" ? alert("Correct") : alert("Wrong"));

const games = ["apex", "valorant", "fortnite", "minecraft"];

for (const game of games) {
  console.log(game);
}

const list = document.querySelector("ul");
list.remove();

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again !");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 4000);
setTimeout(() => {
  console.log("More timing out ...");
}, 6000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi"));

function init() {
  function greet() {
    console.log("Hi!");
  }
  greet();
}
init();
