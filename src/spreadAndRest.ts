// spread operator
const friends = ['Alice', 'Bob'];

const schoolFriends = ['David', 'Eve'];

const collgeFriends = ['Frank', 'Grace'];

const allFirends = [...friends,...schoolFriends]

// console.log(allFirends);




/// object use method 
const person = {
    name : "John",
    age : 30,
    city : "New York"
}

const updatedPerson = {
    ...person,
    id : 31,
    country : "USA"
}

// console.log(updatedPerson);


// rest operator
const sendInvite = (...friends: string[]) => {
    friends.forEach(friend => {
        console.log(`Inviting ${friend} to the party!`);
    });
}

sendInvite('sajeeb', 'shanto', 'shorot');