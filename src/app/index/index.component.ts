import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  recipes = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.apiService.getTrending()
      .subscribe(res => this.recipes = res.recipes);
  }
}
