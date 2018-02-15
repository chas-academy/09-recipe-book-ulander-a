import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

import { User } from './user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<User>('http://api.recipes.dev/api/login', { email, password })
      // this is just the HTTP call,
      // we still need to handle the reception of the token
      .shareReplay();
  }
}
