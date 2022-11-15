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

  public async getAllGuestBookSignatures():Observable<Array<GuestBookEntry>> {
    //TODO: Use URL CLASS Instead of STRING manipulation
    return await this._http.get(environment.ROBO_API_URL+'guestbook');
    // return new Array<GuestBookEntry>;
  }

}
