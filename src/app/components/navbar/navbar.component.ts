import { AuthService } from '../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() user;
  @Input() imgProfile;

  isLoginModalActive: boolean = false;

  constructor(
    private authService: AuthService,
    private userService:UserService

  ) { }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  logout () {
    this.authService.logout();
  }

  loginModalHide(value) {
    this.isLoginModalActive = value;
  }

}
