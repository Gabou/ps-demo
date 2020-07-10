import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
      return this.http.post('https://putsreq.com/L6aN3vdJk0GL1Gh1A0gS', userSettings);
  }

}
