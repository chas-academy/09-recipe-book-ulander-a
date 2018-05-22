import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

import * as moment from 'moment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(name: string, email: string, password: string) {
    return this.http.post<Object>('https://young-eyrie-92940.herokuapp.com/api/auth/register', { name, email, password })
      .do(res => console.log(res));
  }

  login(email: string, password: string) {
    return this.http.post<Object>('https://young-eyrie-92940.herokuapp.com/api/auth/login', { email, password })
      .do(res => this.setSession(res))
      .do(res => console.log(res))
      .shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expires_in, 'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  getUser() {
    const token = localStorage.getItem('access_token');

    return this.http.post<any>('https://young-eyrie-92940.herokuapp.com/api/auth/me?', { token });
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
