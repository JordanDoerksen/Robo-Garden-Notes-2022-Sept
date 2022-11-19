import { Component, OnInit } from '@angular/core';
import { RoboGardenNotesApiService } from 'src/app/services/api/robo-garden-notes-api.service';
import {iShowGuestBookEntryDto} from "../../models/dto/iShowGuestBookEntryDto";

@Component({
  selector: 'app-guest-book-page',
  templateUrl: './guest-book-page.component.html',
  styleUrls: ['./guest-book-page.component.scss']
})
export class GuestBookPageComponent implements OnInit {

  constructor(private _roboApi:RoboGardenNotesApiService) { }

  isLoading: boolean = true;
  guestBookData: iShowGuestBookEntryDto[] | undefined;

  ngOnInit(): void {
    this._roboApi.getAllGuestBookSignatures().subscribe((data:iShowGuestBookEntryDto[])=>{
      this.guestBookData = data;
      this.isLoading = false;
    });
  }
}
