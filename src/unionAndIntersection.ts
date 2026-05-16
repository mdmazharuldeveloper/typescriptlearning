//union
type Role = "admin" | "user" | "guest";   


const  getdashborad = (role: Role)=> {
    if(role === "admin"){
        return "Admin Dashboard";
    }else if(role === "user"){
        return "User Dashboard";
    }else{
        return "Guest Dashboard";
    }
}

console.log(getdashborad("admin")); // Output: Admin Dashboard


// intersection &

type Employee  = {
    id: number;
    name: string;
}



type Manager = {
    department: string;
}


type ManagerEmployee = Employee & Manager;

const managerEmployee1: ManagerEmployee = {
    id: 2,
    name: "Jane Smith",
    department: "Sales"
}

console.log(managerEmployee1); // Output: { id: 2, name: 'Jane Smith', department: 'Sales' }
