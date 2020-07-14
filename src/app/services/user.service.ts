import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.type';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:1337/users';
  private users: User;
  private currentUser: User;

  constructor(private http: HttpClient) {}

  setCurrentUser(user: User = null) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}`);
  }

  tryToLogin() {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http
      .get(`${this.baseUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: User) => {
        this.currentUser = response;

        this.getUserDetails();
      });
  }

  editUser(editForm) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http
      .put(`${this.baseUrl}/${editForm.id}`, editForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: User) => {
        this.currentUser = response;
      });
    this.getUserDetails();
  }

  getUserDetails() {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    const httpOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    this.http
      .get(`${env.userApiURL}/${this.currentUser.id}`, httpOptions)
      .subscribe((response: any) => {
        if (response.profileImg) {
          this.currentUser.profileImgURL = `${env.baseApiURL}${response.profileImg.url}`;
        } else {
          this.currentUser.profileImgURL = 'assets/avatar-placeholder.png';
        }
      });
  }

  saveImg(file) {
    const token = window.localStorage.getItem('token');
    const form = new FormData();
    form.append('files', file);
    // form.append('refId', id);
    // form.append('ref','user');
    // form.append('field', 'profileImg');

    return this.http.post(env.uploadApiURL, form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  editUserImg(userData, userId) {
    const token = window.localStorage.getItem('token');
    const id = userId;

    this.http
      .put(`${env.userApiURL}/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: User) => (this.users = response));
    this.getUserDetails();
  }
}
