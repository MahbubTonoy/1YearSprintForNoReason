class Animal {
 constructor(type, sound) {
  this.type = type;
  this.sound = sound;
 }
 static makeSound(type, sound) {
  this.type = type;
  this.sound = sound;
  return this.sound;
 }
}

// let animal = new Animal("Cat", "Meaw");
console.log(Animal.makeSound("Dog", "Bark"));