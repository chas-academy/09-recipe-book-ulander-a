import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../api.service';
import { AuthService } from '../login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe  = {};

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get() {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiService.getRecipe(id)
      .subscribe(res => this.recipe = res);
  }

  add(item): void {
    this.authService.getUser()
      .subscribe(
        user => this.apiService.addToList(user.id, item.recipe_id)
          .subscribe(res => this.messageService.add('Recipe added!')
        )
      );
  }
}


