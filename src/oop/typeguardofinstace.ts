class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getSleep(hours: number) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} is studying for ${numberOfHours} hours.`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    doTeach(subject: string) {
        console.log(`${this.name} is teaching ${subject}.`);
    }
}

const getUserInfo = (user: Person) => {
    if(user instanceof Student) {
        user.doStudy(5);
    } else if(user instanceof Teacher) {
        user.doTeach("Mathematics");
    } else {
        user.getSleep(8);
    }
};

const person1 = new Person("Alice"); // This will call getSleep method
const student1 = new Student("Bob");
const teacher1 = new Teacher("Charlie");


getUserInfo(person1); // Output: Alice is sleeping for 8 hours.
getUserInfo(student1); // Output: Bob is studying for 5 hours.
getUserInfo(teacher1); // Output: Charlie is teaching Mathematics.



//function guard of instance

const isStudent = (user: Person): user is Student => {
    return user instanceof Student;
};

const isTeacher = (user: Person): user is Teacher => {
    return user instanceof Teacher;
};

const getUserInfoWithGuard = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(5);
    } else if(isTeacher(user)) {
        user.doTeach("Mathematics");
    } else {
        user.getSleep(8);
    }
};

getUserInfoWithGuard(person1); // Output: Alice is sleeping for 8 hours.
getUserInfoWithGuard(student1); // Output: Bob is studying for 5 hours.
getUserInfoWithGuard(teacher1); // Output: Charlie is teaching Mathematics. 