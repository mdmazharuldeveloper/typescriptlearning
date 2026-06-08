//type guard and
const add = (num1:number, num2:number)=>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    else {
        return "Please provide numbers only.";
    }

}

console.log(add(5, 10)); // Output: 15
console.log(add("Hello", "World")); // Output: "Hello World"    
console.log(add(5, "10")); // Output: "Please provide numbers only."


//type guard witn in 

type Admin = {
    name: string;
    role: 'admin';
}

type NormalUser = {
    name: string;
}

const getUserInfo = (user: Admin | NormalUser) => {
    if('role' in user){
        return `User ${user.name} is an admin.`;
    }
    else {
        return `User ${user.name} is a normal user.`;
    }
}

const adminUser: Admin = { name: "Alice", role: 'admin' };
const normalUser: NormalUser = { name: "Bob" };

console.log(getUserInfo(adminUser)); // Output: User Alice is an admin.
console.log(getUserInfo(normalUser)); // Output: User Bob is a normal user.
