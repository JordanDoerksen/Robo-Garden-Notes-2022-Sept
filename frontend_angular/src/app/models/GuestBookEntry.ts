export class GuestBookEntry{
    firstName:string;
    lastName:string;
    displayName:string;
    email:string;
    message:string;
    createdAt:Date;
    updatedAt:Date;

    constructor(firstName:string,lastName:string,displayName:string,email:string,message:string,createdAt:Date,updatedAt:Date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = displayName;
        this.email = email;
        this.message = message;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}


