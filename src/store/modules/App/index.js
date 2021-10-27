import registeringUser from "./User"

const APP = {
    users: [],
    
    currentUser: {},
    totalRegisteredUsers: 0,
    userSatisfaction: Number,
    
    registerUser: (name, email, phoneNumber, password, type) => {
        return registeringUser(name, email, phoneNumber, password, type)
    },

    /*searchUser: (searchData) => {

    },

    deleteUser: (id) => {

    },

    editUser: (id) => {

    },*/

}

export default APP