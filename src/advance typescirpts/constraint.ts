type Student= {
    name: string,
    age?: number,
}


const addStudentToCoure =<T extends Student>(studentInfo:T)=>{
    return {
        ...studentInfo,
        course: 'typescript'
    }
}

const student1 = {
    name: 'shovon',
    age: 25,
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

