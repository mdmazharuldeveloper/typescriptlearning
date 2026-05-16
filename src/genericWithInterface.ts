interface Developer <T, X>{
    name: string;
    salary: number | string;
    device:{
        brand: string;
        model: string;
        releaseYear: string
    };
    smartWatch?: T;
    bike:X;
}

type SmartWatch = {
    brand: string;
    model: string;
}

type Bike = {
    brand: string | number;
    model: string;
}

const poorDeveloper: Developer<SmartWatch, Bike> = {
    name: "John Doe",
    salary: 30000,
    device:{
        brand: "Dell",
        model: "XPS 13",
        releaseYear: "2020"
    },
    smartWatch: {
        brand: "Apple",
        model: "Series 6"
    },
    bike: {
        brand: 23,
        model: "Domane SL 7"
    }
}


const richDeveloper: Developer<null, null> = {
    name: "Jane Smith",
    salary: 150000,
    device:{
        brand: "MacBook Pro",
        model: "16-inch",
        releaseYear: "2021"
    },
    smartWatch: null,
    bike: null
}

console.log(typeof(poorDeveloper.bike.brand));// 

