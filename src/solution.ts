// problem 1

const number:number[]= [1,2,3,4,5,6,7];

const filterEvenNumbers =(num:number)=>{
    return num % 2 === 0;
}

const res1 = number.filter(filterEvenNumbers);
// console.log("Result of Problem 1 " + res1);


// problem 2

const value1:string ='typescript';

const reverseString =(value:string)=>{
    return value.split('').reverse().join('');
}

// console.log("Result of Problem 2 " + reverseString(value1))

// problem 3
type StringOrNumber = string | number;
const checkType = (value:StringOrNumber) =>{
    if(typeof  value === 'string'){
        return 'string';
    }
   if(typeof value === 'number'){
       return 'number';
   }
   return value;
}


const res2 = checkType('hello')
const res3 = checkType(42)


// console.log("Result of Problem 3 " + res2,res3)

// Problem 4

const getProperty =<X extends object,Y extends keyof X>(value:X,key:Y)=>{
    return value[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
const res4 = getProperty(user,'name')
console.log(res4)
