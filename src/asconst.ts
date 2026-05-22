const UserRole = {
  Admin: 'admin',
  User: 'user',
  Guest: 'guest'
} as const;



const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
    if(role === UserRole.Admin || role === UserRole.User){
        return true
    }
    return false
}


const res = canEdit(UserRole.Admin)
console.log(res)