const person = {
  name: "caglar",
};

function greet(message) {
  console.log(`${message}, ben ${this.name}`);
}

greet.apply(person, ["merhaba"]);

//math ile kullanim
const numbers = [5, 8, 2, 10, 3];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);

const minNumber = Math.min.apply(null, numbers);
console.log(minNumber);

//append
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2);

console.log(arr1); // Çıktı: [1, 2, 3, 4, 5, 6]
