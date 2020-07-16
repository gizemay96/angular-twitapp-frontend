import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/types/user.type';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-follow-card',
  templateUrl: './follow-card.component.html',
  styleUrls: ['./follow-card.component.scss']
})
export class FollowCardComponent implements OnInit {
  users:User[];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    return this.userService.getUsers()
    .subscribe((response:User[]) => this.users = response )
  }

  getAvatarImg(id) {
    return this.users[id].profileImg
      ? `${env.baseApiURL}${this.users[id].profileImg.url}`
      : 'assets/avatar-placeholder.png';
  }
}
