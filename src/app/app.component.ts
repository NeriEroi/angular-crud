import { Component } from '@angular/core';
import { GetService } from './get-service/get.service';
import { PostService } from './post-service/post.service';
import { DeleteService } from './delete-service/delete.service';
import { PutService } from './put-service/put.service';
import { PatchService } from './patch-service/patch.service';
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
    age: ''
  }

  userUpdate = {
    name: '',
    age: ''
  }

  togglePanel: any = {};

  constructor(private getService: GetService, private postService: PostService, private deleteService: DeleteService, private putService: PutService, private patchService: PatchService) { }


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

    if (this.userName.name != '' && this.userName.age != '') {
      return this.postService.postUsers(data).subscribe((res) => {
        console.warn(res);
        window.location.reload();
      });
    }
  
    return console.log('NO DATA POSTED!!!')

  }

  // delete
  removeUser(id: any) {
    return this.deleteService.deleteUsers(id).subscribe((res) => {
      console.warn(res);
      window.location.reload();
    })
  }

  // update
  updateUsers(id: any) {

    let body = {
      name: this.userUpdate.name,
      age: this.userUpdate.age,
    }

    return this.putService.putUsers(id, body).subscribe((res) => {
      console.warn(res);
      window.location.reload();
    }
    );

  }

  // patch
  patchName(id: any) {
    let body = {
      name: this.userUpdate.name,
    }
    
    return this.patchService.patchUsers(id, body).subscribe((res) => {
      this.userUpdate = res;
      window.location.reload();
    }
    );
    
  }

  patchAge(id: any) {
    let body = {
      age: this.userUpdate.age,
    }
    
    return this.patchService.patchUsers(id, body).subscribe((res) => {
      this.userUpdate = res;
      window.location.reload();
    }
    );
    
  }

}
