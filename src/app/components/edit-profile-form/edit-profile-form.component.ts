import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss']
})
export class EditProfileFormComponent implements OnInit {

  @Output() formClose = new EventEmitter();

  constructor(
    private userService : UserService,
  ) { }

  ngOnInit(): void {
  }

  get users() {
    return this.userService.getCurrentUser();
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

   closeForm() {
     this.formClose.emit();
   }

}
