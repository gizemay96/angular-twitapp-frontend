import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AuthResponse } from '../../types/authResponse.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  isLoading: boolean = false;
  form = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.isLoading = true;
    const registerData = {
      username: this.form.username,
      email: this.form.email,
      password: this.form.password,
    };
    this.authService
      .register(registerData)
      .subscribe((response: AuthResponse) => {
        this.authService.setToken(response.jwt);
        this.userService.setCurrentUser(response.user);

        this.form.username = '';
        this.form.email = '';
        this.form.password = '';
        this.form.confirmPassword = '';

        this.isLoading = false;

        this.router.navigateByUrl('/home');
        this.userService.getUserDetails()
      });
  }

}
