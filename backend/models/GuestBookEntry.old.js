module.exports = class GuestBookEntry {
    constructor(firstName, lastName, displayName, email, message){
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = displayName;
        this.email = email;
        this.message = message;
    }
}