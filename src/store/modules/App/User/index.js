import APP from ".."
import MarketList from "../MarketList"

class User {
    constructor( id, userName, email, phoneNumber, password,type) {
        this.id = id
        this.userName = userName
        this.email = email
        this.phoneNumber = phoneNumber
        this.password = password
        this.type = type

        this.totalOfLists = 0
        this.marketList = []
    }
    createList(listName) {
        let date = new Date()
        
        let day = String(date.getDate()).padStart(2, '0')
        let month = String(date.getMonth() + 1).padStart(2, '0')
        let year = date.getFullYear()
        let initDate = month + '/' + day + '/' + year
        
        let user = APP.users.filter(n => APP.users.length > 0 ? n.id != this.id : n)

        console.log('From create list, user: ', user )

        this.marketList.push(new MarketList(user.totalOfLists, listName, initDate))
        this.totalOfLists++
    }
}

export default function registeringUser( userName, email, phoneNumber, password,type) {
    
    APP.totalRegisteredUsers++
    const id = APP.totalRegisteredUsers
    const newUser = new User(id , userName, email, phoneNumber, password,type )

    APP.users.push(newUser)
}