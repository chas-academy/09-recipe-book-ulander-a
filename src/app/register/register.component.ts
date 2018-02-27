import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-register',
  template: `
  <h1>Register</h1>
<form [formGroup]="form">
    <fieldset>
        <legend>Register</legend>
        <div class="form-field">
        <label>Name:</label>
        <input name="name" formControlName="name"
               type="name">
        </div>
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
                (click)="register()">Submit</button>
    </div>
</form>`})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: RouterModule,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const val = this.form.value;

    if (val.name && val.email && val.password) {
      this.authService.register(val.name, val.email, val.password)
        .subscribe(
          () => {
            this.messageService.add('Register successful')
          }
        )
    }
  }
}
