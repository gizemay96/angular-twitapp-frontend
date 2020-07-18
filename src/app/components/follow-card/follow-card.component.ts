import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/types/user.type';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-follow-card',
  templateUrl: './follow-card.component.html',
  styleUrls: ['./follow-card.component.scss']
})
export class FollowCardComponent implements OnInit {
  follow:boolean = false;
  @Input() users:User;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  getAvatarImg(id) {
    return this.users[id].profileImg
      ? `${env.baseApiURL}${this.users[id].profileImg.url}`
      : 'assets/avatar-placeholder.png';
  }

  deneme1(){
    this.follow = true;
  }

  deneme2(){
    this.follow =false;
  }
}
