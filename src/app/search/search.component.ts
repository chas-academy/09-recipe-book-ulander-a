import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;
  query;
  results = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.searchForm = formBuilder.group({
      query: [Validators.required]
    });
  }

  ngOnInit() { }

  search(query): void {
    this.query = query;

    this.apiService.searchRecipes(query.value)
      .subscribe(res => this.results = res.recipes);
  }

  // more(): void {
  //   let page = 2;

  //   this.apiService.searchRecipes(this.query.value + `&page=${page}`)
  //     .subscribe(res => this.results.push(res));

  //     page++;
  // }
}
