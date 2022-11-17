import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuestBookEntry } from '../models/GuestBookEntry';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoboGardenNotesApiService {

  constructor(private _http:HttpClient) { }

  public getAllGuestBookSignatures():Observable<GuestBookEntry[]> {
    return this._http.get<GuestBookEntry[]>(environment.ROBO_API_URL+'guestbook');
  }

}
