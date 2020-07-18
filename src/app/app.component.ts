import { Component , OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userService.tryToLogin()
  }
  
  get user () {
    return this.userService.getCurrentUser();
  }

  get profileImg() {
    if(this.user){
      return this.user.profileImgURL;
    }
  }
}


