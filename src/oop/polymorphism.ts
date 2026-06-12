class Person {
    getSleep(){
        console.log("Person is sleeping.");
    }
}

class Student extends Person {
    getSleep(){
        console.log("Student is sleeping.");
    }
}

class Teacher extends Person {
    getSleep(){
        console.log("Teacher is sleeping.");
    }
}

const person: Person = new Person();
const student: Person = new Student();
const teacher: Person = new Teacher();

person.getSleep(); // Output: Person is sleeping.
student.getSleep(); // Output: Student is sleeping.
teacher.getSleep(); // Output: Teacher is sleeping.


const getSleepFunction = (person: Person) => {
    person.getSleep();
}

getSleepFunction(person); // Output: Person is sleeping.
getSleepFunction(student); // Output: Student is sleeping.
getSleepFunction(teacher); // Output: Teacher is sleeping.

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle: Shape = new Circle(5);
const rectangle: Shape = new Rectangle(4, 6);

console.log(circle.getArea()); // Output: 78.53981633974483
console.log(rectangle.getArea()); // Output: 24

const getAreaFunction = (shape: Shape) => {
    console.log(shape.getArea());
}

getAreaFunction(circle); // Output: 78.53981633974483
getAreaFunction(rectangle); // Output: 24