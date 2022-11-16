import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuestBookEntry } from '../models/GuestBookEntry';
import { environment } from 'src/environments/environment';
import {map, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoboGardenNotesApiService {

  constructor(private _http:HttpClient) { }

  public getAllGuestBookSignatures():Observable<GuestBookEntry[]> {
    //TODO: Use URL CLASS Instead of STRING manipulation
    //  this._http.get<Array<GuestBookEntry>>(environment.ROBO_API_URL+'guestbook').pipe((data)=>{
    //   return data;
    // });
    return this._http.get<GuestBookEntry[]>(environment.ROBO_API_URL+'guestbook');
  }

}