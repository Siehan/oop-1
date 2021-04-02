/* info.js - 1 **************************************************************

Créer un object literal alice qui contiendra les informations suivantes:

firstName: 'Alice'
lastName : 'Liddell'
age: 28
Dans le même fichier créer object literal bob qui contiendra les informations suivantes:

firstName: 'Bob'
lastName: 'Lemon'
age: 30
Dans le même fichier créer object literal charlie qui contiendra les informations suivantes:

firstName: 'Charlie'
lastName: 'Charlot'
age: 8

info.js - 2 **************************************************************

Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous.
Créer une fonction printInfo qui prendra un objet en paramètre et qui affichera
sur la console les informations concernant alice, bob ou charlie

info.js - 3 **************************************************************

Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous.
Créer une fonction canVote qui prendra un objet en paramètre et qui retourne
true si la personne peut voter ou false sinon.
Par exemple canVote(alice) retournera true et canVote(charlie) retournera false.
La majorité est à 18 ans.

info.js - 4 **************************************************************

Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous.
Faites preuve d'imagination et ajouter à chacun des objets
une propriété language qui sera un tableau de string qui contiendra
la liste de tous les langages de programmation que
Alice, Bob et Charlie connaissent.

info.js - 5 **************************************************************

Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous.
Ecrivez une fonction mostSkilledDev qui prendra comme paramètre 2 objets,
parmi alice, bob et charlie et qui retournera le firstName de la personne qui
connait le plus de langages de programmation.
En cas d'égalité draw sera retourné.

*/
const chalk = require("chalk");

// object literals : alice, bob, charlie

const alice = {
  firstName: "Alice",
  lastName: "Liddell",
  age: 28,
  language: ["ruby", "Julia", "HTML/CSS", "PHP", "JavaScript", "Solidity", "Python", "C++"],
};

const bob = {
  firstName: "Bob",
  lastName: "Lemon",
  age: 30,
  language: ["Java", "Scala", "HTML/CSS", "PHP", "Swift", "Solidity", "JavaSript", "Python", "C++"],
};

const charlie = {
  firstName: "Charlie",
  lastName: "Charlot",
  age: 8,
  language: ["Scratch", "Python", "JavaScript for Kids", "Ruby", "Minecraft", "Cood", "Code Studio", "Kodable"],
};

const printInfo = (person) => {
  // person is an object
  console.log(chalk.magenta(`first name: ${person.firstName}`));
  console.log(chalk.green(`last name: ${person.lastName}`));
  console.log(chalk.blue(`age: ${person.age}`));
};

const canVote = (person) => {
  if (person.age >= 18) {
    return `${true} : ${person.firstName}, you can vote`;
  } else {
    return `${false} : ${person.firstName}, you can not vote`;
  }
};

/*
VERSION ATTENDUE
const canVote = (person) => {
  return person.age >= 18 ? true : false;
};
*/

// This function create an object based on arguments passed
const mostSkilledDev = (person1, person2) => {
  if (person1.language.length > person2.language.length) {
    return `${person1.firstName} knows more programming languages`;
  } else if (person1.language.length < person2.language.length) {
    return `${person2.firstName} knows more programming languages`;
  } else {
    return `draw`;
  }
};

console.log(chalk.red("--------------------------"));

printInfo(alice);
console.log(chalk.yellow(canVote(alice)));

console.log(chalk.red("--------------------------"));

printInfo(bob);
console.log(chalk.yellow(canVote(bob)));

console.log(chalk.red("--------------------------"));

printInfo(charlie);
console.log(chalk.yellow(canVote(charlie)));

console.log(chalk.red("--------------------------"));

//console.log(chalk.red(mostSkilledDev(alice, charlie)));
//console.log(chalk.red(mostSkilledDev(alice, bob)));
console.log(chalk.red(mostSkilledDev(charlie, bob)));

console.log(chalk.red("--------------------------"));

/*

OUTPUT :

➜  oop-1 git:(main) ✗
--------------------------
first name: Alice
last name: Liddell
age: 28
true : Alice, you can vote
--------------------------
first name: Bob
last name: Lemon
age: 30
true : Bob, you can vote
--------------------------
first name: Charlie
last name: Charlot
age: 8
false : Charlie, you can not vote
--------------------------
Bob knows more programming languages
--------------------------

*/
