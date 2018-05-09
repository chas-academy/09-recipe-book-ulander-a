import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe  = {};

  constructor(
    private apiService: ApiService,
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

}


