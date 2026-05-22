enum UserRoles  {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

const canEdit = (role: UserRoles): boolean => {
    if (role === UserRoles.Admin) {
        return true;
    }
    return false;
}


const res = canEdit(UserRoles.User);
console.log(res); // Output: false
