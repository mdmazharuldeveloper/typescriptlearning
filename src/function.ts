const user = {
    firstName : "John",
    lastName : "Doe",
    age : 30,
    isAdmin : true,
    addAge( value : number) : number {
        this.age += value;
        return this.age;
    }
}

console.log(user.addAge(5)); // Output: 35


const arr = [1, 2, 3, 4, 5];
const sqrArray : number[] = arr.map(x => x * x);
console.log(sqrArray); // Output: [1, 4, 9, 16, 25]