import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  url = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) {}

  putUsers(id: any, body: any): Observable<any> {
    return this.http.put<User>(this.url + id, body);
  }
  
}
