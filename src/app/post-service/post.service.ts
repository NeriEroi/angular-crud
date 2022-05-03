import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:8000/users/';
  constructor(private http: HttpClient) {}

  postUsers(data: any) {
    return this.http.post<User>(this.url, data);
  }

}
