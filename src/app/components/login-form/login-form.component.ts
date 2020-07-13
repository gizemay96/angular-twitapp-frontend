import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AuthResponse } from '../../types/authResponse.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() isLoginModalHide = new EventEmitter<boolean>();
  isLoading: boolean = false;
  form = {
    identifier: '',
    password:''
  }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true,
    this.authService.login(this.form)
    .subscribe((response: AuthResponse) => {
      
      
      this.authService.setToken(response.jwt);
      this.userService.setCurrentUser(response.user);

      this.isLoading = false;

      this.form.identifier = '';
      this.form.password = '';

      this.isLoginModalHide.emit(true);

      this.router.navigateByUrl('/profile');

      this.userService.getUserDetails();
    })
  }




}
