import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

import * as moment from 'moment';

import { User } from './user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<User>('http://api.recipes.dev/api/auth/login', { email, password })
      .do(res => this.setSession(res))
      .do(res => console.log(res))
      .shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expires_in, 'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
