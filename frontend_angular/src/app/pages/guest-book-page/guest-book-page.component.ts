import { Component, OnInit } from '@angular/core';
import { GuestBookEntry } from 'src/app/models/GuestBookEntry';
import { RoboGardenNotesApiService } from 'src/app/services/robo-garden-notes-api.service';

@Component({
  selector: 'app-guest-book-page',
  templateUrl: './guest-book-page.component.html',
  styleUrls: ['./guest-book-page.component.scss']
})
export class GuestBookPageComponent implements OnInit {

  constructor(private _roboApi:RoboGardenNotesApiService) { }

  guestBookData: GuestBookEntry[] | undefined;

  ngOnInit(): void {
    this._roboApi.getAllGuestBookSignatures().subscribe((data:GuestBookEntry[])=>{
      this.guestBookData = {...data};
    });
  }
}