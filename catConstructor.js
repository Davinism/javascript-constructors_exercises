let Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;
  this.meow = function () {
    return "I'm a cat!";
  };

};

// Cat.prototype.cuteStatement = function () {
//   return `${this.owner} loves ${this.name} `;
// };

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name} `;
};

Cat.prototype.meow = function () {
  return `Meow, ${this.name}`;
};

let pickles = new Cat("Pickles", "No One");
pickles.meow = function () {
  return "Pickles doesn't meow";
};

let carrots = new Cat("Carrots", "Someone");

// console.log(pickles.cuteStatement());
console.log(pickles.meow());
console.log(carrots.meow());
