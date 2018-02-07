import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.results.slice(1, 5));
  }
}
