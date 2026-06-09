 // Inheritance example in TypeScript

// Base class
class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

  makeDance (): void {
    console.log(`${this.name} is dancing.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeDance(); // Output: Buddy is dancing.


