/*
point.js
Améliorer la classe Point du cours en ajoutant une méthode distance pour calculer
et retourner la distance entre 2 points.
La distance entre deux points peut se calculer en consultant:
https://fr.wikipedia.org/wiki/Distance_entre_deux_points_sur_le_plan_cart%C3%A9sien
Pour calculer la racine carrée d'un nombre on utilise directement la méthode Math.sqrt:

Math.sqrt(9) // retourne 3
Pour mettre au carré une nombre on le multiplie par lui même ou sinon on utilise la méthode Math.pow:
Math.pow(3, 2) // retourne 9, c'est a dire 3 au carré

*/

/*********************************************** INFOS **********************************************************/

const chalk = require("chalk");

// Définir une classe avec le keyword class
// Instancier un objet de la classe avec le keyword new
// Définit d'une classe Point

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    console.log(`(${this.x}, ${this.y})`);
  }

  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false;
  }

  // (x1, y1) ; (x2, y2) // d = √((x2 - x1)2 + (y2 - y1)2
  distance(point) {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }
}

exports.Point = Point;

/*********************************************** INFORMATION **********************************************************/
/*
https://fr.wikihow.com/calculer-une-distance

 La (d = distance) peut se calculer entre deux points d'un plan grâce à la formule : d = √((x2 - x1)2 + (y2 - y1)2,
 dans laquelle (x1, y1) et (x2, y2) sont les coordonnées de vos deux points.

La fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire baseexposant.
console.log(Math.pow(7, 3)); // expected output: 343
console.log(Math.pow(4, 0.5)); // expected output: 2
console.log(Math.pow(7, -2)); // expected output: 0.02040816326530612
console.log(Math.pow(-7, 0.5)); // expected output: NaN

Utilisation simple Math.pow(7, 2); // 49

    
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4)); // expected output: 5
console.log(calcHypotenuse(5, 12)); // expected output: 13
console.log(calcHypotenuse(0, 0));// expected output: 0

*/
