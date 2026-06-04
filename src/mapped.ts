type AreaofNum= {
    height:number,
    width:number
}

type User = {
    name:string,
    age:number,
    salary:number
}

type Area <T> = {
    [key in keyof T]: T[key]
}

const area1 : Area<AreaofNum> = {
    height: 10,
    width: 20
}

console.log(area1) //

const user : Area<User> = {
    name:"Shuvo",
    age: 25,
    salary: 50000
}

console.log(user) 