import {iCreateGuestBookEntryDto} from "./iCreateGuestBookEntryDto";

export class CreateGuestBookEntryDto implements iCreateGuestBookEntryDto{
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  message: string;

  constructor(displayName: string, email: string, firstName: string, lastName: string, message: string) {
    this.displayName = displayName;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.message = message;
  }
}
