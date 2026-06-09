//oop- class and object

// class Animal{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }

//     makeSound(){
//         console.log(`${this.name} is making a sound.`);
//     }
// }

// const dog = new Animal("Tommy", 5);
// dog.makeSound();


// parameter properties
class Person {
    constructor(public name: string, public age: number) {}
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 30);
  person1.greet();