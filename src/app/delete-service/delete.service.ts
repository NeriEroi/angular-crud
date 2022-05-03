import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  url = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) { }

  deleteUsers(id: any): Observable<any> {
    return this.http.delete<User>(this.url + id);
  }

}
