// first test
// this should be
// console.log("my app is good");

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  greet() {
    console.log(
      `hello, my name is ${this.name}, and i am ${this.age} years old!`
    );
  }
}

let person = new Person("abdellah", 26);
// person.greet();
console.log(person);
try {
    throw new Error("this is the last error")
} catch (error) {
    console.log(error.message)
}