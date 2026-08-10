type RichPeople = {
    car:string,
    bike:string,
    cng:string
}

type MyVhicle = "bike" | "car" | "cng"

type MyVhicleType = keyof RichPeople


type User = {
    name:string,
    age:number,
    salary:number,
    address:{
        city:string,
        country:string
    }
}

const user:User ={
    name:"Shuvo",
    age: 25,
    salary: 50000,
    address:{
        city:"Dhaka",
        country:"Bangladesh"
    }
}



const getObjectFromProperty =<T> (obj:T, key: keyof T) => {
    return obj[key]
}

const result = getObjectFromProperty(user, "name")
console.log(result)//


const product = {
    brand:'Apple',
}

const result2 = getObjectFromProperty(product, "brand")//Error