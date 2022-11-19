import { Component, OnInit } from '@angular/core';
import {CreateGuestBookEntryDto} from "../../../models/dto/CreateGuestBookEntryDto";

@Component({
  selector: 'app-guest-book-entry-form',
  templateUrl: './guest-book-entry-form.component.html',
  styleUrls: ['./guest-book-entry-form.component.scss']
})
export class GuestBookEntryFormComponent implements OnInit {

  guestBookFormInput = new CreateGuestBookEntryDto(
    '',
    '',
    '',
    '',
    ''
  );

  constructor() { }

  ngOnInit(): void {
  }

}
