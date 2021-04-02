const chalk = require("chalk");

const { Point } = require("./point");
const { Human } = require("./classInfos");

/**********************************  HUMAN  ******************************************/

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

console.log(chalk.red("--------------------------"));

/**********************************  POINT  ******************************************/

// p1 est une instance de Point
const p1 = new Point(1, 2);

// p2 est une autre instance de Point
const p2 = new Point(10, 11);

// OK
p2.show(); // print '(10, 11)'

// Error
//Point.show(); // Point is not an instance of Point.. Point is a class

console.log(chalk.red(`is equal ? ${p1.isEqual(p2)}`)); // return false
console.log(p1.distance(p2));

/**********************************  TESTS  ******************************************/

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
--------------------------
(10, 11)
is equal ? false
12.727922061357855

*/
