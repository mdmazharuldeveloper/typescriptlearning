//nullable type
const user =(input:string | null) => {
    if(input === null){
        return "No input provided";
    }
    return `User input: ${input}`;
}

const res1 = user('shovon')
console.log(res1); // Output: User input: shovon

//Unknown type
const discountCalculator =(input: unknown) => {
    if(typeof input === 'number'){
        return `Discounted price: ${input * 0.9}`;
    }
    else if(typeof input === 'string'){
        const [price] = input.split('');
        return `Discounted price: ${Number(price) * 0.9}`;
    }
    return "Invalid input type";
}

const res2 = discountCalculator('100 taka bdt');
console.log(res2);// Output: Discounted price: 90


//Never type
const errorHandler = (message: string): never => {
    throw new Error(message);
}