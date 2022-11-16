import { Component, OnInit } from '@angular/core';
import { RoboGardenNotesApiService } from 'src/app/services/robo-garden-notes-api.service';
import {GuestBookEntry} from "../../models/GuestBookEntry";

@Component({
  selector: 'app-guest-book-page',
  templateUrl: './guest-book-page.component.html',
  styleUrls: ['./guest-book-page.component.scss']
})
export class GuestBookPageComponent implements OnInit {

  guestBookData: GuestBookEntry[] | undefined;

  constructor(private _roboApi:RoboGardenNotesApiService) { }


  ngOnInit(): void {
    this._roboApi.getAllGuestBookSignatures().subscribe((data:GuestBookEntry[]) => this.guestBookData = {...data});
    console.log(this.guestBookData);
  }

}
