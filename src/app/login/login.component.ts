import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  template: `
  <h1>Login</h1>
  <p *ngIf="isLoggedIn()">You are already logged in!</p>
<form [formGroup]="form">
    <fieldset>
        <legend>Login</legend>
        <div class="form-field">
            <label>Email:</label>
            <input name="email" formControlName="email">
        </div>
        <div class="form-field">
            <label>Password:</label>
            <input name="password" formControlName="password"
                   type="password">
        </div>
    </fieldset>
    <div class="form-buttons">
        <button class="button button-primary"
                (click)="login()">Login</button>
    </div>
</form>`})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: RouterModule,
    private messageService: MessageService
  ) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            this.messageService.add('Login successful!');
            this.authService.getUser();
          }
        );
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
