import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {iShowGuestBookEntryDto} from "../models/dto/iShowGuestBookEntryDto";

@Injectable({
  providedIn: 'root'
})
export class RoboGardenNotesApiService {

  constructor(private _http:HttpClient) { }

  public getAllGuestBookSignatures():Observable<iShowGuestBookEntryDto[]> {
    return this._http.get<iShowGuestBookEntryDto[]>(environment.ROBO_API_URL+'guestbook');
  }

}
