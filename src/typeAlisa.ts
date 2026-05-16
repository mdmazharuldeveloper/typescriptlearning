type User = {
  id: number;
  name: string;
  email: string;
};

const user1: User = {
  id: 1,
  name: "Alice",
  email: "shovonKhan00@gmail.com",
};

console.log(user1); // Output: { id: 1, name: 'Alice', email: '


type Addfunction = (a: number, b: number) => number;

const add: Addfunction = (x, y) => x + y;

console.log(add(5, 3)); // Output: 8
