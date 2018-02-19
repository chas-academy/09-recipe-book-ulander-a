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
  recipes = [];

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.authService.getUser()
      .subscribe(
        user => this.apiService.getList(user.id)
          .subscribe(items => items.forEach(item => {
            console.log(item);
            this.apiService.getRecipe(item)
              .subscribe(result => this.recipes.push(result));
          })
          )
      );
  }

  // add(item): void {
  //   this.authService.getUser()
  //     .subscribe(
  //       user => this.apiService.addToList(user, item.id)
  //         .subscribe(res => this.messageService.add('Recipe added!')
  //         )
  //     );
  // }

  remove(item): void {
    this.authService.getUser()
      .subscribe(
        user => this.apiService.removeFromList(user, item.recipe.recipe_id)
          .subscribe(res => this.messageService.add('Recipe removed!'))
      );
  }
}
