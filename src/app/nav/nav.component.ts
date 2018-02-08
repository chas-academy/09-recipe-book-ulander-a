import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: Category[];

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.recipeService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
