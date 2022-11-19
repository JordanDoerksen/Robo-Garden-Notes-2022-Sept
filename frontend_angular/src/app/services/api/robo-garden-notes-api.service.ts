import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {iShowGuestBookEntryDto} from "../../models/dto/iShowGuestBookEntryDto";
import {CreateGuestBookEntryDto} from "../../models/dto/CreateGuestBookEntryDto";

@Injectable({
  providedIn: 'root'
})
export class RoboGardenNotesApiService {

  constructor(private _http:HttpClient) { }

  public getAllGuestBookSignatures():Observable<iShowGuestBookEntryDto[]> {
    return this._http.get<iShowGuestBookEntryDto[]>(environment.ROBO_API_URL+'guestbook');
  }

  public createNewGuestBookSignature(guestBookFormInput: CreateGuestBookEntryDto):Observable<iShowGuestBookEntryDto>{
    return this._http.post<iShowGuestBookEntryDto>(
      environment.ROBO_API_URL+'guestbook/sign-guestbook',
      JSON.stringify(guestBookFormInput)
    )
  }


}
