// //generic function
// const createArrayWithString = (value:string)=>{
//     return [value]
// }


// const createArrayWithNumber = (value:number)=>{
//     return [value]
// }


// const createArrayWithObject = (value:{name:string, age:number})=>{
//     return [value]
// }

const createArrayWithGeneric = <T>(value:T)=>{
    return [value]
}


const arrString = createArrayWithGeneric('shovon')
const arrNumber = createArrayWithGeneric(123)
const arrObj = createArrayWithGeneric({
    name: 'shovon',
    age: 25
})



console.log(arrObj);//

// touple 

const createToupleWithGeneric = <T, U>(value1:T, value2:U)=>{
    return [value1, value2]
}

const touple1 = createToupleWithGeneric('shovon', 123)
const touple2 = createToupleWithGeneric({name:'shovon', age:25}, ['a', 'b', 'c'])


console.log(touple2);

//

const addStudentToCoure =<T>(studentInfo:T)=>{
    return {
        ...studentInfo,
        course: 'typescript'
    }
}

const student1 = {
    name: 'shovon',
    hasPen: true,
}

const student2 = {
    name: 'shovon2',
    age: 225,
    hasCar: true
}

const res = addStudentToCoure(student1)
const res2 = addStudentToCoure(student2)

console.log(res);
console.log(res2);

