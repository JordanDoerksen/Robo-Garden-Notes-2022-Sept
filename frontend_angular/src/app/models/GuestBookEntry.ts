export interface GuestBookEntry {
  id: number;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;

  // constructor(id:number, firstName:string,lastName:string,displayName:string,email:string,message:string,createdAt:Date,updatedAt:Date){
  //   this.id = id;
  //   this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.displayName = displayName;
  //     this.email = email;
  //     this.message = message;
  //     this.createdAt = createdAt;
  //     this.updatedAt = updatedAt;
  // }
}


