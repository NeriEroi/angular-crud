import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  url = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) {}

  putUsers(id: any, body: any) {
    return this.http.put(this.url + id, body);
  }
  
}
