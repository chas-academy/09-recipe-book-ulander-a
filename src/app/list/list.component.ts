import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../database.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipeIds = [];
  recipes = [];

  constructor(
    private databaseService: DatabaseService,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipeIds();
  }

  getRecipeIds(): void {
    this.databaseService.getData()
      .subscribe(recipeIds => this.getRecipes(recipeIds));
  }

  getRecipes(recipeIds) {
    recipeIds.forEach(element => {
      this.recipeService.getRecipe(element.recipeId)
        .subscribe(res => this.recipes.push(res));
    });
  }
}
