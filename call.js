const person1 = { name: "caglar" };
const person2 = { name: "ahmet" };

function introduce(age, city) {
  console.log(`ben ${this.name}, ${age} yasindayim ve ${city}'de yasiyorum`);
}

introduce.call(person1, 22, "mersin");
introduce.call(person2, 42, "konya");

//inheritance

const user = {
  name: "Caglar",
  greet: function () {
    console.log(`Merhaba, ben ${this.name}`);
  },
};

const anotherUser = { name: "Ali" };

user.greet.call(anotherUser);
