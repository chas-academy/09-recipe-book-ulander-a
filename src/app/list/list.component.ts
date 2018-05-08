import { Component, OnInit } from '@angular/core';

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

  createList(name): void {
    this.authService.getUser()
    .subscribe(
      user => this.apiService.createList(user.id, name)
        .subscribe(response => console.log(response))
    );
  }

    // createList(name): void {
  //   this.authService.getUser()
  //     .subscribe(
  //       user => this.apiService.createList(name)
  //     )
  // }

  // add(item): void {
  //   this.authService.getUser()
  //     .subscribe(
  //       user => this.apiService.addToList(user, item.id)
  //         .subscribe(res => this.messageService.add('Recipe added!')
  //         )
  //     );
  // }

  // remove(item): void {
  //   this.authService.getUser()
  //     .subscribe(
  //       user => this.apiService.removeFromList(user, item.recipe.recipe_id)
  //         .subscribe(res => this.messageService.add('Recipe removed!'))
  //     );
  // }
}
