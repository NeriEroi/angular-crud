import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatchService {

  url = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) {}

  patchUsers(id: any, body: any): Observable<any> {
    return this.http.patch<User>(this.url + id, body);
  }
  
}
