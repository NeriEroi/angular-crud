import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  url = 'http://localhost:8000/users/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<User>(this.url);
  }
  
}
