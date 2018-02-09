import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes = [];

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.databaseService.getData()
      .subscribe(data => this.recipes = data);
  }
}
