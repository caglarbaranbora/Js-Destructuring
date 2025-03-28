// class Sinif {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }

// const sinif = new Sinif("jupiter");
// console.log(sinif);

// function makeClass() {
//   class Vegetable {
//     constructor(vgtbl) {
//       this.vgtbl = vgtbl;
//     }
//   }
//   return Vegetable;
// }

// const sebze = makeClass();
// const carrot = new sebze("carrot");
// console.log(carrot);

// //getter setter

// class Book {
//   constructor(author) {
//     this._author = author;
//   }

//   get writer() {
//     return this._author;
//   }
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }

function makeClass() {
  class fToC {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(newTemp) {
      this._temp = newTemp;
    }
  }
  return fToC;
}

const fToC = makeClass();
const thermos = new fToC(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
