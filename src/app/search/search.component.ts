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

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.searchForm = formBuilder.group({
      query: [Validators.required]
    });
  }

  ngOnInit() {
  }

  search(query): void {
    this.apiService.searchRecipes(query.value)
      .subscribe(res => console.log(res));
  }
}
