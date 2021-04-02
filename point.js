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

const chalk = require("chalk");

//Définir une classe avec le keyword class
//Instancier un objet de la classe avec le keyword new
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

  distance(point) {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }
}

// p1 est une instance de Point
const p1 = new Point(1, 2);

// p2 est une autre instance de Point
const p2 = new Point(10, 11);

// OK
p1.isEqual(p2); // return false
p2.show(); // print '(10, 11)'

// Error
Point.show(); // Point is not an instance of Point.. Point is a class

//const p1 = new Point(1, 2);

/* https://fr.wikihow.com/calculer-une-distance

(x1, y1) ; (x2, y2)
d = √((x2 - x1)2 + (y2 - y1)2

FORMULE - En deux dimensions, on utilise donc le théorème de Pythagore, qui stipule que l'hypoténuse d'un triangle rectangle est égale à la racine carrée de la somme des carrés des deux autres cotés. L'hypoténuse est le côté le plus long d'un triangle rectangle et représente en fait la distance entre nos deux points.
Soit deux points dans un plan cartésien de coordonnées respectives : (3, -10) et (11, 7), le premier est le centre d'un cercle, tandis que le second est un point du cercle. Pour trouver la distance entre les deux, c'est-à-dire le rayon, on procède comme suit :
d = √((x2 - x1)2 + (y2 - y1)2)
d = √((11 - 3)2 + (7 -(-10))2) = √((8)2 + (17)2)
d = √(64 + 289)
d = √(353) = 18,79
*/

/*
 La (d = distance) peut se calculer entre deux points d'un plan grâce à la formule : d = √((x2 - x1)2 + (y2 - y1)2, 
 dans laquelle (x1, y1) et (x2, y2) sont les coordonnées de vos deux points. 
*/
// AB =  (xB -yA)2 + (yB - yA)2
/*

La fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire baseexposant.
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2

console.log(Math.pow(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// expected output: NaN

Utilisation simple
Math.pow(7, 2); // 49
*/

/*
    function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5

console.log(calcHypotenuse(5, 12));
// expected output: 13

console.log(calcHypotenuse(0, 0));
// expected output: 0
    */

exports.Point = Point;
