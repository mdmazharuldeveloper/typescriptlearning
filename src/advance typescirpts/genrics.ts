type GenericArray<T> = Array<T>;

const friend : GenericArray<string> = ["Alice", "Bob", "Charlie"];  


const rollNumber : GenericArray<number> = [1, 2, 3];

const isActive : GenericArray<boolean> = [true, false];


const user : GenericArray<{name: string, age: number}> = [{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}];


