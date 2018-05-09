import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../login.service';
import { MessageService } from '../message.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  listForm: FormGroup = this.builder.group({
    name: this.name,
  });

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  createList() {
    const listName = this.listForm.value.name;
    console.log(listName);
    this.authService.getUser()
    .subscribe(
      user => this.apiService.createList(user.id, listName)
      .subscribe(
        list => console.log(list)
      )
    );

  }

}
