/*
classInfo.js

Traduire votre script info.js pour utiliser une classe, et donc des instances de classes,
au lieu object literals.
la classe devra se nommer Human
il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe

*/

const chalk = require("chalk");

// class declaration

class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.language = language;
  }

  printInfo() {
    console.log(chalk.magenta(`first name: ${this.firstName}`));
    console.log(chalk.green(`last name: ${this.lastName}`));
    console.log(chalk.blue(`age: ${this.age}`));
  }

  canVote() {
    if (this.age >= 18) {
      return `${true} : ${this.firstName}, you can vote`;
    } else {
      return `${false} : ${this.firstName}, you can not vote`;
    }
  }

  mostSkilledDev = () => {
    if (this.language.length > this.language.length) {
      return `${this.firstName} knows more programming languages`;
    } else if (this.language.length < this.language.length) {
      return `${this.firstName} knows more programming languages`;
    } else {
      return `Draw ! Same number of programming languages`;
    }
  };
}

// alice, bob & charlie are an instance of Human

// Alice, 8 languages
const alice = new Human("Alice", "Liddell", 28, [
  "ruby",
  "Julia",
  "HTML/CSS",
  "PHP",
  "JavaScript",
  "Solidity",
  "Python",
  "C++",
]);

// Bob, 9 languages
const bob = new Human("Bob", 30, "Lemon", [
  "Java",
  "Scala",
  "HTML/CSS",
  "PHP",
  "Swift",
  "Solidity",
  "JavaSript",
  "Python",
  "C++",
]);

// Charlie, 8 languages
const charlie = new Human("Charlie", 8, "Charlot", [
  "Scratch",
  "Python",
  "JavaScript for Kids",
  "Ruby",
  "Minecraft",
  "Cood",
  "Code Studio",
  "Kodable",
]);

console.log(chalk.red("--------------------------"));

console.log(chalk.red(alice.firstName));
console.log(chalk.red(bob.firstName));
console.log(chalk.red(charlie.firstName));

console.log(chalk.red("--------------------------"));

alice.printInfo();
console.log(chalk.yellow(alice.canVote()));

console.log(chalk.red("--------------------------"));

bob.printInfo();
console.log(chalk.yellow(bob.canVote()));

console.log(chalk.red("--------------------------"));

charlie.printInfo();
console.log(chalk.yellow(charlie.canVote()));

console.log(chalk.red("--------------------------"));

console.log(chalk.red(alice.mostSkilledDev(charlie)));
//console.log(chalk.red(alice.mostSkilledDev(bob)));
//console.log(chalk.red(charlie.mostSkilledDev(bob)));

/* OUTPUT TEST

➜  oop-1 git:(main) ✗
--------------------------
Alice
Bob
Charlie
--------------------------
first name: Alice
last name: Liddell
age: 28
true : Alice, you can vote
--------------------------
first name: Bob
last name: 30
age: Lemon
false : Bob, you can not vote
--------------------------
first name: Charlie
last name: 8
age: Charlot
false : Charlie, you can not vote
--------------------------
draw ! Same number of programming languages

*/

exports.Human = Human;
