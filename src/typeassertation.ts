//typeasstertation
const kgTogmConversion =(input: number | string): number| string | null =>{
    if(typeof input === 'number'){
        return input * 1000;
    }
    else if(typeof input === 'string'){
        const [kg] = input.split(' ');
        return `${Number(kg) * 1000} gm`;
    }
    return null;
}

const res1 = kgTogmConversion(2) as number;
const res2 = kgTogmConversion('3 kg') as string;
const res3 = kgTogmConversion(true as unknown as number); // Invalid input type, returns null
