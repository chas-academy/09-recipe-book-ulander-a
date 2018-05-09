import { Component, OnInit, Output } from '@angular/core';

import { AuthService } from '../login.service';
import { MessageService } from '../message.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists = [];

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.lists = [];
    this.authService.getUser()
      .subscribe(
        user => this.apiService.getLists(user.id)
          .subscribe(lists => lists.forEach(list => {
            console.log(list);
            this.lists.push(list);
          })
          )
      );
  }
}
