/*
classInfo.js
Traduire votre script info.js pour utiliser une classe, et donc des instances de classes,
au lieu object literals.
la classe devra se nommer Human
il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe
*/

/**********************************  CLASS INFOS  ******************************************/

const chalk = require("chalk");

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

exports.Human = Human;
