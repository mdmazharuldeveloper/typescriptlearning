//private only for use in the class for encapsulation
class Employee {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

const emp = new Employee("John Doe", 30);
console.log(emp.getName()); // John Doe
console.log(emp.getAge()); // 30
// console.log(emp.name); // Error: Property 'name' is private and only accessible within class 'Employee'.
// console.log(emp.age); // Error: Property 'age' is private and only accessible within class 'Employee'.                   


//protected only for use in the class and its subclasses for encapsulation
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
} 

class Student extends Person {
    private grade: number;

    constructor(name: string, grade: number) {
        super(name);
        this.grade = grade;
    }   
}

const student = new Student("Jane Doe", 90);
console.log(student.getName()); // Jane Doe
// console.log(student.name); // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.