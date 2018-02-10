import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
    }

  goBack(): void {
    this.location.back();
  }

  saveRecipe(): void {
    const recipeId = +this.route.snapshot.paramMap.get('id');
    this.databaseService.postData(recipeId)
      .subscribe(wtf => console.log(wtf));
  }
}
