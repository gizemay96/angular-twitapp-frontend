import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
   show: boolean = false;
  

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {

  }

  get users() {
    return this.userService.getUser()
  }

  editForm() {
    this.show = true;
  }

  saveUser(){
   const editForm:User = {
     id: this.users.id,
     username: this.users.username,
     email: this.users.email,
     ...this.users
   }
   this.userService.editUser(editForm)
 
    
  }

}
