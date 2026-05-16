//turnary operator example in TypeScript
const age = (age: number) => { 
    const res = age > 18 ? "Adult" : "Minor";
    return res;
 }

 const res = age(20);
 console.log(res); // Output: Adult


 // ?? operator example in TypeScript
const isAuthenticated = null;

const user = isAuthenticated ?? "Guest";

console.log(user); // Output: Guest

//optional chaining example in TypeScript
const user1 = {
    address: {
        present: {
            street: "221B Baker Street",
            city: "London",
            country: "UK"
        }
    }
}

const street = user1.address?.present?.street;