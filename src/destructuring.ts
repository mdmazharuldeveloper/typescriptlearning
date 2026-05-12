
// Destructuring in TypeScript from objects with nested properties
const userProfile = {
    id: 101,
    personal: {
        name: {
            first: "John",
            middle: {
                short: "A.",
                full: "Alexander"
            },
            last: "Doe"
        },
        contact: {
            phone: {
                home: "123-456-7890",
                work: "555-111-2222"
            },
            email: {
                primary: "john@example.com",
                backup: "john.doe@backup.com"
            }
        },
        age: 30,
        address: {
            present: {
                street: "221B Baker Street",
                city: "London",
                country: "UK"
            },
            permanent: {
                street: "742 Evergreen Terrace",
                city: "Springfield",
                country: "USA"
            }
        }
    },
    accounts: {
        social: {
            facebook: {
                username: "johnFB",
                followers: 1200
            },
            instagram: {
                username: "johnInsta",
                followers: 5400,
                posts: [
                    { id: 1, title: "Travel Vlog", likes: 300 },
                    { id: 2, title: "Food Review", likes: 150 }
                ]
            }
        },
        bank: {
            primary: {
                bankName: "HSBC",
                accountNumber: "12345678",
                transactions: [
                    { id: 1, amount: 200, type: "deposit" },
                    { id: 2, amount: 50, type: "withdraw" }
                ]
            }
        }
    }
}

const { id, personal, accounts } = userProfile


const { name, contact, age, address } = personal

const { present : {street : myStreet} } = address

// console.log(myStreet); // Output: 221B Baker Street

// Destructuring in TypeScript from arrays with nested elements
const data = [
    {
        id: 1,
        name: "John",
        hobbies: ["travel", "coding", "photography"],
        education: [
            {
                level: "Bachelor",
                year: 2020,
                subjects: [
                    { name: "Math", grade: "A" },
                    { name: "Computer Science", grade: "A+" }
                ]
            },
            {
                level: "Master",
                year: 2023,
                subjects: [
                    { name: "AI", grade: "A+" },
                    { name: "Data Science", grade: "A" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Sarah",
        hobbies: ["music", "design"],
        education: [
            {
                level: "Bachelor",
                year: 2019,
                subjects: [
                    { name: "Art", grade: "A" },
                    { name: "Design", grade: "A+" }
                ]
            }
        ]
    }
];



data[1]?.education[0]?.year // Output: 2019




