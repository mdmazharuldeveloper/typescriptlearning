//for type intersection
type User = {
    name: string;
    age: number;

}

type Role = "admin" | "user" | "guest";

type UserProfile = User & Role;

const userProfile: UserProfile = {
    name: "John Doe",
    age: 30,
    role: "admin",
}

console.log(userProfile); //


//interface example
interface Iuser {
    name: string;
    age: number;
}

interface Iemployee extends Iuser {
    role: 'admin' | 'user' | 'guest';
}

const employee: Iemployee = {
    name: "Jane Smith",
    age: 28,
    role: "user"
}

console.log(employee); // Output: { name: 'Jane Smith', age: 28, role: 'user' }