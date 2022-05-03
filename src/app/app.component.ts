import { Component } from '@angular/core';
import { GetService } from './get-service/get.service';
import { PostService } from './post-service/post.service';
import { DeleteService } from './delete-service/delete.service';
import { PutService } from './put-service/put.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users$: User[] = [];

  userName = {
    name: '',
  }

  userUpdate = {
    name: '',
  }

  togglePanel: any = {};

  constructor(private getService: GetService, private postService: PostService, private deleteService: DeleteService, private putService: PutService) { }


  ngOnInit() {
    this.getUsers()
  }

  // get
  getUsers() {
    this.getService.getUsers().subscribe((res) => {
      this.users$ = res;
    })
  }

  // post
  addUser(data: any) {
    return this.postService.postUsers(data).subscribe((res) => {
      console.warn(res);
      window.location.reload();
    });

  }

  // delete
  removeUser(id: any) {
    return this.deleteService.deleteUsers(id).subscribe((res) => {
      console.warn(res);
      window.location.reload();
    })
  }

  updateUsers(id: any) {

    let body = {
      name: this.userUpdate.name,
    }

    return this.putService.putUsers(id, body).subscribe((res) => {
      console.warn(res);
      window.location.reload();
    }
    );

  }

}
