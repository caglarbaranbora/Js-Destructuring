const person = {
  name: "Caglar",
  introduce: function () {
    console.log(`Merhaba, ben ${this.name}`);
  },
};

const newFunction = person.introduce.bind(person);

newFunction();
