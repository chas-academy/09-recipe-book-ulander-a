import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Category } from '../category';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Input() category: Category;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.getRecipes();
    this.getCategory();
  }

  getRecipes(): void {
    const category = this.route.snapshot.paramMap.get('category');
    this.recipeService.getRecipes('filter.php?c=' + category)
      .subscribe(recipes => this.recipes = recipes);
  }

  getCategory(): void {
    this.category = this.route.snapshot.paramMap.get('category');
  }

}
